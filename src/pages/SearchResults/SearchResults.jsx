import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import css from "./SearchResults.module.css";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import Heading from "../../components/Heading/Heading";
import baseUrl from "../../data/url.json";

// All 12 category slugs — must match the JSON filenames exactly
const ALL_CATEGORIES = [
  { slug: "frame-your-phone", label: "Frame Your Phone" },
  { slug: "timeless-treasures", label: "Timeless Treasures" },
  { slug: "paper-whispers", label: "Paper Whispers" },
  { slug: "old-soul-kitchen", label: "Old Soul Kitchen" },
  { slug: "the-gogh-edit", label: "The Gogh Edit" },
  { slug: "nestled-nook", label: "Nestled Nook" },
  { slug: "muse-and-memo", label: "Muse & Memo" },
  { slug: "pink-parade", label: "Pink Parade" },
  { slug: "the-bookish-mark", label: "The Bookish Mark" },
  { slug: "wearable-whimpsy", label: "Wearable Whimpsy" },
  { slug: "a-little-extra", label: "A Little Extra" },
  { slug: "hold-it-pretty", label: "Hold It Pretty" },
];

const productsWithCustomMessage = [
  "story-walls-gogh",
  "keepsake-boxes-gogh",
  "painted-keepsakes-gogh",
  "love-and-latte-coasters",
];

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    const fetchAll = async () => {
      setLoading(true);
      const q = query.toLowerCase();
      const matched = [];

      // Load all 12 JSON files in parallel
      const promises = ALL_CATEGORIES.map(async (cat) => {
        try {
          const module = await import(
            `../../data/products/categories/${cat.slug}.json`
          );
          const data = module.default;
          // Match if: product name contains query OR category label contains query
          const categoryMatches = cat.label.toLowerCase().includes(q);
          (data.products || []).forEach((product) => {
            const productMatches = product.name.toLowerCase().includes(q);
            if (productMatches || categoryMatches) {
              matched.push({
                ...product,
                categorySlug: cat.slug,
                categoryLabel: cat.label,
              });
            }
          });
        } catch (err) {
          // silently skip if a category fails to load
        }
      });

      await Promise.all(promises);
      setResults(matched);
      setLoading(false);
    };

    fetchAll();
  }, [query]);

  const handleProductClick = (categorySlug, productUrl) => {
    navigate(`/products/${categorySlug}/${productUrl}`);
  };

  return (
    <MainContainer>
      <Helmet>
        <title>{`Search: "${query}" - Small Time Artist`}</title>
        <meta name="description" content={`Search results for ${query}`} />
      </Helmet>
      <Breadcrumbs />
      <Section label="Search Results">
        <WrapperContainer className={css.wrapper}>
          <Heading className={css.heading} level="1">
            {query ? (
              <>
                Results for "<span>{query}</span>"
              </>
            ) : (
              "Search Products"
            )}
          </Heading>

          {loading && <div className={css.statusMsg}>Searching...</div>}

          {!loading && query && results.length === 0 && (
            <div className={css.statusMsg}>
              <p>
                No products found for "<strong>{query}</strong>"
              </p>
              <p className={css.hint}>
                Try searching for a category like "gogh", "phone", "kitchen" or
                a product name.
              </p>
            </div>
          )}

          {!loading && results.length > 0 && (
            <>
              <div className={css.filters}>
                <span>
                  {results.length} result{results.length !== 1 ? "s" : ""} found
                </span>
              </div>
              <div className={css.gridContainer}>
                {results.map((product, index) => (
                  <div
                    key={`${product.categorySlug}-${product.id}-${index}`}
                    className={css.card}
                    onClick={() =>
                      handleProductClick(product.categorySlug, product.url)
                    }
                  >
                    <div className={css.imgCont}>
                      <img
                        src={`${baseUrl.supabase_base_url}${product.cover_img}`}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className={css.details}>
                      <Heading level="3">{product.name}</Heading>
                      <p className={css.categoryTag}>{product.categoryLabel}</p>
                      {productsWithCustomMessage.includes(product.url) ? (
                        <p className={css.customPrice}>
                          Prices vary based on customization
                        </p>
                      ) : (
                        product.price?.map((_, i) => (
                          <p key={i}>
                            <span>{`Rs. ${_.original}${_.showAbove ? " & above" : ""}`}</span>
                            {_.excl && (
                              <span className={css.excl}>{` + ${_.excl}`}</span>
                            )}
                            {_.incl && (
                              <span className={css.incl}>{`- ${_.incl}`}</span>
                            )}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default SearchResults;
