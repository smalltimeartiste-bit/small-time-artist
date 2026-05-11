import { FiSearch, FiX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

import ALL_SUGGESTIONS from "../../utils/buildSearchSuggestions";
import { MdCategory } from "react-icons/md";
import classNames from "classnames";
import { createPortal } from "react-dom";
import css from "./ProductSearch.module.css";
import { useNavigate } from "react-router";

/**
 * Self-contained product search bar with autocomplete dropdown.
 *
 * Matching logic:
 *  1. Product/category name contains the query (highlighted in bold)
 *  2. Any of the product's search tags contain the query  (tag hint shown)
 *
 * On Enter / "See all results" → navigates to /products/search?q=...
 */
function ProductSearch() {
  const navigate = useNavigate();
  const searchBarRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dropdownStyle, setDropdownStyle] = useState({});

  // ── Position the portal dropdown under the search bar ──
  const updateDropdownPosition = () => {
    if (searchBarRef.current) {
      const rect = searchBarRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "fixed",
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        const portal = document.getElementById("search-dropdown-portal");
        if (portal && portal.contains(e.target)) return;
        setShowDropdown(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keep dropdown aligned on scroll / resize
  useEffect(() => {
    if (!showDropdown) return;
    window.addEventListener("scroll", updateDropdownPosition, true);
    window.addEventListener("resize", updateDropdownPosition);
    return () => {
      window.removeEventListener("scroll", updateDropdownPosition, true);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [showDropdown]);

  // ── Matching — name OR any tag ──
  const filterSuggestions = (q) => {
    const lower = q.toLowerCase();
    return ALL_SUGGESTIONS.filter(
      (s) =>
        s.name.toLowerCase().includes(lower) ||
        s.tags.some((t) => t.toLowerCase().includes(lower)),
    ).slice(0, 8);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setActiveIndex(-1);
    if (!val.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }
    const matched = filterSuggestions(val);
    setSuggestions(matched);
    if (matched.length > 0) {
      updateDropdownPosition();
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setShowDropdown(false);
    setSearchQuery("");
    if (suggestion.type === "category") {
      navigate(`/products/${suggestion.slug}`);
    } else {
      navigate(`/products/${suggestion.categorySlug}/${suggestion.productSlug}`);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowDropdown(false);
      navigate(`/products/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown")
      setActiveIndex((p) => Math.min(p + 1, suggestions.length - 1));
    else if (e.key === "ArrowUp")
      setActiveIndex((p) => Math.max(p - 1, -1));
    else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex])
        handleSuggestionClick(suggestions[activeIndex]);
      else handleSearch();
    } else if (e.key === "Escape") {
      setShowDropdown(false);
      setActiveIndex(-1);
    }
  };

  // Highlight the matching portion of the product/category name
  const highlight = (text, query) => {
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <strong>{text.slice(idx, idx + query.length)}</strong>
        {text.slice(idx + query.length)}
      </>
    );
  };

  // Find the first tag that matched (used as a hint when name didn't match)
  const matchedTag = (suggestion) => {
    const lower = searchQuery.toLowerCase();
    if (suggestion.name.toLowerCase().includes(lower)) return null;
    return suggestion.tags.find((t) => t.toLowerCase().includes(lower)) || null;
  };

  // ── Dropdown portal ──
  const dropdownPortal =
    showDropdown &&
    createPortal(
      <ul
        id="search-dropdown-portal"
        className={css.dropdown}
        style={dropdownStyle}
      >
        {suggestions.map((s, i) => {
          const tag = matchedTag(s);
          return (
            <li
              key={i}
              className={classNames(css.suggestionItem, {
                [css.suggestionActive]: i === activeIndex,
              })}
              onMouseDown={() => handleSuggestionClick(s)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <span className={css.suggestionIcon}>
                {s.type === "category" ? <MdCategory /> : <FiSearch />}
              </span>
              <span className={css.suggestionText}>
                {highlight(s.name, searchQuery)}
                {tag && (
                  <span className={css.tagHint}>&ldquo;{tag}&rdquo;</span>
                )}
              </span>
              <span className={css.suggestionBadge}>
                {s.type === "category" ? "Category" : s.categoryName}
              </span>
            </li>
          );
        })}
        <li className={css.seeAll} onMouseDown={handleSearch}>
          <FiSearch /> See all results for &ldquo;
          <strong>{searchQuery}</strong>&rdquo;
        </li>
      </ul>,
      document.body,
    );

  return (
    <>
      <div className={css.searchRow}>
        <div
          ref={searchBarRef}
          className={classNames(css.searchBar, {
            [css.searchBarOpen]: showDropdown,
          })}
        >
          <FiSearch className={css.searchIcon} onClick={handleSearch} />
          <input
            type="text"
            placeholder="Search products, categories or styles..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (suggestions.length > 0) {
                updateDropdownPosition();
                setShowDropdown(true);
              }
            }}
            className={css.searchInput}
            autoComplete="off"
          />
          {searchQuery && (
            <button
              className={css.clearBtn}
              onClick={() => {
                setSearchQuery("");
                setSuggestions([]);
                setShowDropdown(false);
              }}
            >
              <FiX />
            </button>
          )}
        </div>
      </div>

      {dropdownPortal}
    </>
  );
}

export default ProductSearch;
