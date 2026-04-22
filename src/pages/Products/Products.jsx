import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { FiArrowUpRight, FiSearch, FiX } from "react-icons/fi";
import { MdCategory } from "react-icons/md";
import css from "./Products.module.css";
import classNames from "classnames";
import Heading from "../../components/Heading/Heading";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";

import card1 from "../../assets/decorations/products/card1_decor.svg";
import card2 from "../../assets/decorations/products/card2_decor.svg";
import card3 from "../../assets/decorations/products/card3_decor.svg";
import card4 from "../../assets/decorations/products/card4_decor.svg";
import card5 from "../../assets/decorations/products/card5_decor.svg";
import card6 from "../../assets/decorations/products/card6_decor.svg";
import card7 from "../../assets/decorations/products/card7_decor.svg";
import card8 from "../../assets/decorations/products/card8_decor.svg";
import card9 from "../../assets/decorations/products/card9_decor.svg";
import card10 from "../../assets/decorations/products/card10_decor.svg";
import card11 from "../../assets/decorations/products/card11_decor.svg";
import card12 from "../../assets/decorations/products/card12_decor.svg";

import card1_img from "../../assets/content/products/grid_sec/card1.png";
import card2_img from "../../assets/content/products/grid_sec/card2.png";
import card3_img from "../../assets/content/products/grid_sec/card3.png";
import card4_img from "../../assets/content/products/grid_sec/card4.png";
import card5_img from "../../assets/content/products/grid_sec/card5.png";
import card6_img from "../../assets/content/products/grid_sec/card6.png";
import card7_img from "../../assets/content/products/grid_sec/card7.png";
import card8_img from "../../assets/content/products/grid_sec/card8.png";
import card9_img from "../../assets/content/products/grid_sec/card9.png";
import card10_img from "../../assets/content/products/grid_sec/card10.png";
import card11_img from "../../assets/content/products/grid_sec/card11.png";
import card12_img from "../../assets/content/products/grid_sec/card12.png";

import featuredProducts from "../../data/products/featured.json";
import FAQ from "../../components/Faq/Faq";

const ALL_SUGGESTIONS = [
  { type: "category", name: "Frame Your Phone", slug: "frame-your-phone" },
  { type: "category", name: "Timeless Treasures", slug: "timeless-treasures" },
  { type: "category", name: "Paper Whispers", slug: "paper-whispers" },
  { type: "category", name: "Old Soul Kitchen", slug: "old-soul-kitchen" },
  { type: "category", name: "The Gogh Edit", slug: "the-gogh-edit" },
  { type: "category", name: "Nestled Nook", slug: "nestled-nook" },
  { type: "category", name: "Muse & Memo", slug: "muse-and-memo" },
  { type: "category", name: "Pink Parade", slug: "pink-parade" },
  { type: "category", name: "The Bookish Mark", slug: "the-bookish-mark" },
  { type: "category", name: "Wearable Whimsy", slug: "wearable-whimpsy" },
  { type: "category", name: "A Little Extra", slug: "a-little-extra" },
  { type: "category", name: "Hold It Pretty", slug: "hold-it-pretty" },
  {
    type: "product",
    name: "The Custom Edit",
    categorySlug: "frame-your-phone",
    productSlug: "the-custom-edit",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "City Souls (Kolkata Edition)",
    categorySlug: "frame-your-phone",
    productSlug: "city-souls-kolkata",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "The Gogh Edit",
    categorySlug: "frame-your-phone",
    productSlug: "the-gogh-edit",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "Mood & Muse",
    categorySlug: "frame-your-phone",
    productSlug: "mood-muse",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "Mood & Muse (Taylor's Version)",
    categorySlug: "frame-your-phone",
    productSlug: "mood-muse-taylor",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "Mood & Muse (Ray's Scope)",
    categorySlug: "frame-your-phone",
    productSlug: "mood-muse-ray-scope",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "Mood & Muse (Durga Pujo Edition)",
    categorySlug: "frame-your-phone",
    productSlug: "mood-muse-durga-pujo",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "Stories You Carry",
    categorySlug: "frame-your-phone",
    productSlug: "stories-you-carry",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "Painted Frame",
    categorySlug: "frame-your-phone",
    productSlug: "painted-frame",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "Vintage Vibe",
    categorySlug: "frame-your-phone",
    productSlug: "vintage-vibe",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "Brew & You",
    categorySlug: "frame-your-phone",
    productSlug: "brew-you",
    categoryName: "Frame Your Phone",
  },
  {
    type: "product",
    name: "Keepsake Corners",
    categorySlug: "timeless-treasures",
    productSlug: "keepsake-corners",
    categoryName: "Timeless Treasures",
  },
  {
    type: "product",
    name: "Vintage Frames (Glass Collection)",
    categorySlug: "timeless-treasures",
    productSlug: "vintage-frames-glass",
    categoryName: "Timeless Treasures",
  },
  {
    type: "product",
    name: "Made to Frame",
    categorySlug: "timeless-treasures",
    productSlug: "made-to-frame",
    categoryName: "Timeless Treasures",
  },
  {
    type: "product",
    name: "Clip & Cherish",
    categorySlug: "timeless-treasures",
    productSlug: "clip-and-cherish",
    categoryName: "Timeless Treasures",
  },
  {
    type: "product",
    name: "MemorEase (DIY Canvas)",
    categorySlug: "timeless-treasures",
    productSlug: "memorease-diy-canvas",
    categoryName: "Timeless Treasures",
  },
  {
    type: "product",
    name: "Farewell Frames",
    categorySlug: "paper-whispers",
    productSlug: "farewell-frames",
    categoryName: "Paper Whispers",
  },
  {
    type: "product",
    name: "Birthday Bloom",
    categorySlug: "paper-whispers",
    productSlug: "birthday-bloom",
    categoryName: "Paper Whispers",
  },
  {
    type: "product",
    name: "Lover's Lane",
    categorySlug: "paper-whispers",
    productSlug: "lovers-lane",
    categoryName: "Paper Whispers",
  },
  {
    type: "product",
    name: "Make It Yours",
    categorySlug: "paper-whispers",
    productSlug: "make-it-yours",
    categoryName: "Paper Whispers",
  },
  {
    type: "product",
    name: "Cake Story Toppers",
    categorySlug: "paper-whispers",
    productSlug: "cake-story-toppers",
    categoryName: "Paper Whispers",
  },
  {
    type: "product",
    name: "Occasion Notes",
    categorySlug: "paper-whispers",
    productSlug: "occasion-notes",
    categoryName: "Paper Whispers",
  },
  {
    type: "product",
    name: "Hanging Recipes",
    categorySlug: "old-soul-kitchen",
    productSlug: "hanging-recipes",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Snapshot Magnets",
    categorySlug: "old-soul-kitchen",
    productSlug: "snapshot-magnets",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Shaped Charms",
    categorySlug: "old-soul-kitchen",
    productSlug: "shaped-charms",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "To-Do Tales",
    categorySlug: "old-soul-kitchen",
    productSlug: "to-do-tales",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Canvas Charms",
    categorySlug: "old-soul-kitchen",
    productSlug: "canvas-charms",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Wooden Whispers",
    categorySlug: "old-soul-kitchen",
    productSlug: "wooden-whispers",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Everyday Charm",
    categorySlug: "old-soul-kitchen",
    productSlug: "everyday-charm",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Tea Time Tales (Coasters)",
    categorySlug: "old-soul-kitchen",
    productSlug: "tea-time-tales",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Self-Love Sips",
    categorySlug: "old-soul-kitchen",
    productSlug: "self-love-sips",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Wizarding Brews",
    categorySlug: "old-soul-kitchen",
    productSlug: "wizarding-brews",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Starry Muse Coasters",
    categorySlug: "old-soul-kitchen",
    productSlug: "starry-muse-coasters",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Mountain Muse",
    categorySlug: "old-soul-kitchen",
    productSlug: "mountain-muse",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Love & Latte Coasters",
    categorySlug: "old-soul-kitchen",
    productSlug: "love-and-latte-coasters",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Tea Time Tokens",
    categorySlug: "old-soul-kitchen",
    productSlug: "tea-time-tokens",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "City Sips (Kolkata Coaster Set)",
    categorySlug: "old-soul-kitchen",
    productSlug: "city-sips",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Brewed Charm (Bamboo Sippers)",
    categorySlug: "old-soul-kitchen",
    productSlug: "brewed-charm",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Wizarding Nights",
    categorySlug: "old-soul-kitchen",
    productSlug: "wizarding-nights",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Starry Sips (MDF Coasters)",
    categorySlug: "old-soul-kitchen",
    productSlug: "starry-sips",
    categoryName: "Old Soul Kitchen",
  },
  {
    type: "product",
    name: "Keepsake Boxes (Jewellery Boxes)",
    categorySlug: "the-gogh-edit",
    productSlug: "keepsake-boxes-gogh",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "Story Walls (Wall Art)",
    categorySlug: "the-gogh-edit",
    productSlug: "story-walls-gogh",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "Painted Keepsakes (Acrylic Frames)",
    categorySlug: "the-gogh-edit",
    productSlug: "painted-keepsakes-gogh",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "The Gogh Journals",
    categorySlug: "the-gogh-edit",
    productSlug: "the-gogh-journals",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "Frame Your Phone (Gogh Edition)",
    categorySlug: "the-gogh-edit",
    productSlug: "frame-your-phone-gogh",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "Starry Sips (Van Gogh Collection)",
    categorySlug: "the-gogh-edit",
    productSlug: "starry-sips-gogh",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "Van Gogh Nights (Coaster Set)",
    categorySlug: "the-gogh-edit",
    productSlug: "van-gogh-nights",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "The Gogh Magnetic Charms",
    categorySlug: "the-gogh-edit",
    productSlug: "the-gogh-magnetic-charms",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "Glow & Go (Starry Night Pouches)",
    categorySlug: "the-gogh-edit",
    productSlug: "glow-and-go-gogh",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "Starry Brews (Bamboo Sippers)",
    categorySlug: "the-gogh-edit",
    productSlug: "starry-brews",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "Starry Tables (Tabletop Art)",
    categorySlug: "the-gogh-edit",
    productSlug: "starry-tables",
    categoryName: "The Gogh Edit",
  },
  {
    type: "product",
    name: "Haven Eye (Evil Eye Wall Hang)",
    categorySlug: "nestled-nook",
    productSlug: "haven-eye",
    categoryName: "Nestled Nook",
  },
  {
    type: "product",
    name: "Breeze Bloomers (Balcony Hangs)",
    categorySlug: "nestled-nook",
    productSlug: "breeze-bloomers",
    categoryName: "Nestled Nook",
  },
  {
    type: "product",
    name: "Home Harmony (Wall Decor)",
    categorySlug: "nestled-nook",
    productSlug: "home-harmony",
    categoryName: "Nestled Nook",
  },
  {
    type: "product",
    name: "Grain & Grace (Wooden Wall Hangs)",
    categorySlug: "nestled-nook",
    productSlug: "grain-and-grace",
    categoryName: "Nestled Nook",
  },
  {
    type: "product",
    name: "Name It Pretty (Nameplates)",
    categorySlug: "nestled-nook",
    productSlug: "name-it-pretty",
    categoryName: "Nestled Nook",
  },
  {
    type: "product",
    name: "Keys & Keeps (Key Holders)",
    categorySlug: "nestled-nook",
    productSlug: "keys-and-keeps",
    categoryName: "Nestled Nook",
  },
  {
    type: "product",
    name: "Table Tales (Tabletop Art)",
    categorySlug: "nestled-nook",
    productSlug: "table-tales",
    categoryName: "Nestled Nook",
  },
  {
    type: "product",
    name: "Story Walls (Custom Wall Art)",
    categorySlug: "nestled-nook",
    productSlug: "story-walls",
    categoryName: "Nestled Nook",
  },
  {
    type: "product",
    name: "Painted Keepsakes (Acrylic Frames)",
    categorySlug: "nestled-nook",
    productSlug: "painted-keepsakes",
    categoryName: "Nestled Nook",
  },
  {
    type: "product",
    name: "Canvas Chronicles (Notebooks)",
    categorySlug: "muse-and-memo",
    productSlug: "canvas-chronicles",
    categoryName: "Muse & Memo",
  },
  {
    type: "product",
    name: "Bound Muse (Hardbound Notebooks)",
    categorySlug: "muse-and-memo",
    productSlug: "bound-muse",
    categoryName: "Muse & Memo",
  },
  {
    type: "product",
    name: "Wander Notes (Travel Notebooks)",
    categorySlug: "muse-and-memo",
    productSlug: "wander-notes",
    categoryName: "Muse & Memo",
  },
  {
    type: "product",
    name: "My Muse Memo (To-do Canvas)",
    categorySlug: "muse-and-memo",
    productSlug: "my-muse-memo",
    categoryName: "Muse & Memo",
  },
  {
    type: "product",
    name: "Your Story Desk (Custom To-do)",
    categorySlug: "muse-and-memo",
    productSlug: "your-story-desk",
    categoryName: "Muse & Memo",
  },
  {
    type: "product",
    name: "Painted Pause (Bookmarks)",
    categorySlug: "muse-and-memo",
    productSlug: "painted-pause",
    categoryName: "Muse & Memo",
  },
  {
    type: "product",
    name: "Vintage Keeps (Bookmarks)",
    categorySlug: "muse-and-memo",
    productSlug: "vintage-keeps",
    categoryName: "Muse & Memo",
  },
  {
    type: "product",
    name: "Scribble Tales (Bookmarks)",
    categorySlug: "muse-and-memo",
    productSlug: "scribble-tales",
    categoryName: "Muse & Memo",
  },
  {
    type: "product",
    name: "Mini Muse (Desk Canvases)",
    categorySlug: "muse-and-memo",
    productSlug: "mini-muse",
    categoryName: "Muse & Memo",
  },
  {
    type: "product",
    name: "Carry Your Canvas (Tote Bags)",
    categorySlug: "hold-it-pretty",
    productSlug: "carry-your-canvas",
    categoryName: "Hold It Pretty",
  },
  {
    type: "product",
    name: "Glow & Go (Painted Pouches)",
    categorySlug: "hold-it-pretty",
    productSlug: "glow-and-go",
    categoryName: "Hold It Pretty",
  },
  {
    type: "product",
    name: "Ink & Ideas (Pencil Pouches)",
    categorySlug: "hold-it-pretty",
    productSlug: "ink-and-ideas",
    categoryName: "Hold It Pretty",
  },
  {
    type: "product",
    name: "Wanderlight (Travel Pouches)",
    categorySlug: "hold-it-pretty",
    productSlug: "wanderlight",
    categoryName: "Hold It Pretty",
  },
  {
    type: "product",
    name: "Tiny Treasure Towers (Trinket)",
    categorySlug: "hold-it-pretty",
    productSlug: "tiny-treasure-towers",
    categoryName: "Hold It Pretty",
  },
  {
    type: "product",
    name: "Keepsake Keepers (Jewellery Boxes)",
    categorySlug: "hold-it-pretty",
    productSlug: "keepsake-keepers",
    categoryName: "Hold It Pretty",
  },
  {
    type: "product",
    name: "Trinket Tales",
    categorySlug: "hold-it-pretty",
    productSlug: "trinket-tales",
    categoryName: "Hold It Pretty",
  },
  {
    type: "product",
    name: "Key Charms (Keychains)",
    categorySlug: "hold-it-pretty",
    productSlug: "key-charms",
    categoryName: "Hold It Pretty",
  },
  {
    type: "product",
    name: "Carry Your Life (Hand-Painted Totes)",
    categorySlug: "hold-it-pretty",
    productSlug: "carry-your-life",
    categoryName: "Hold It Pretty",
  },
  {
    type: "product",
    name: "Vows & Vibes (Wedding Hamper)",
    categorySlug: "a-little-extra",
    productSlug: "vows-and-vibes",
    categoryName: "A Little Extra",
  },
  {
    type: "product",
    name: "Tailor Your Treasure (Custom Hamper)",
    categorySlug: "a-little-extra",
    productSlug: "tailor-your-treasure",
    categoryName: "A Little Extra",
  },
  {
    type: "product",
    name: "Born to Celebrate (Birthday Hamper)",
    categorySlug: "a-little-extra",
    productSlug: "born-to-celebrate",
    categoryName: "A Little Extra",
  },
  {
    type: "product",
    name: "Pocketful of Joy (Mini Hamper)",
    categorySlug: "a-little-extra",
    productSlug: "pocketful-of-joy",
    categoryName: "A Little Extra",
  },
  {
    type: "product",
    name: "For the Muse of My Heart (Romantic)",
    categorySlug: "a-little-extra",
    productSlug: "for-the-muse-of-my-heart",
    categoryName: "A Little Extra",
  },
  {
    type: "product",
    name: "Roots & Gratitude (Parents Hamper)",
    categorySlug: "a-little-extra",
    productSlug: "roots-and-gratitude",
    categoryName: "A Little Extra",
  },
  {
    type: "product",
    name: "Ray Classics (Oversized T-Shirts)",
    categorySlug: "wearable-whimpsy",
    productSlug: "ray-classics",
    categoryName: "Wearable Whimsy",
  },
  {
    type: "product",
    name: "Kolkata Classics (T-Shirts)",
    categorySlug: "wearable-whimpsy",
    productSlug: "kolkata-classics",
    categoryName: "Wearable Whimsy",
  },
  {
    type: "product",
    name: "Paw & Proud (T-Shirts)",
    categorySlug: "wearable-whimpsy",
    productSlug: "paw-and-proud",
    categoryName: "Wearable Whimsy",
  },
  {
    type: "product",
    name: "Brew & Bold (Coffee T-Shirts)",
    categorySlug: "wearable-whimpsy",
    productSlug: "brew-and-bold",
    categoryName: "Wearable Whimsy",
  },
  {
    type: "product",
    name: "Celestial Strokes (Starry Night)",
    categorySlug: "wearable-whimpsy",
    productSlug: "celestial-strokes",
    categoryName: "Wearable Whimsy",
  },
  {
    type: "product",
    name: "Reel Threads (Movie T-Shirts)",
    categorySlug: "wearable-whimpsy",
    productSlug: "reel-threads",
    categoryName: "Wearable Whimsy",
  },
  {
    type: "product",
    name: "Divine Hues (Durga Pujo T-Shirts)",
    categorySlug: "wearable-whimpsy",
    productSlug: "divine-hues",
    categoryName: "Wearable Whimsy",
  },
];

function Products() {
  const [hovered, setHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dropdownStyle, setDropdownStyle] = useState({}); // 🆕 dynamic position
  const navigate = useNavigate();
  const searchBarRef = useRef(null); // 🆕 ref on the search bar div

  const gridItems = [
    {
      title: "Frame Your Phone",
      url: "frame-your-phone",
      img: card1_img,
      bgColor: "#fff0e3",
      decor: card1,
    },
    {
      title: "Timeless Treasures",
      url: "timeless-treasures",
      img: card2_img,
      bgColor: "#eee6ff",
      decor: card2,
    },
    {
      title: "Paper Whispers",
      url: "paper-whispers",
      img: card3_img,
      bgColor: "#f8f8f8",
      decor: card3,
    },
    {
      title: "Old soul kitchen",
      url: "old-soul-kitchen",
      img: card4_img,
      bgColor: "#e5f7f9",
      decor: card4,
    },
    {
      title: "The Gogh Edit",
      url: "the-gogh-edit",
      img: card5_img,
      bgColor: "#ffffff",
      decor: card5,
    },
    {
      title: "Nestled Nook",
      url: "nestled-nook",
      img: card6_img,
      bgColor: "#e6e2da",
      decor: card6,
    },
    {
      title: "Muse & memo",
      url: "muse-and-memo",
      img: card7_img,
      bgColor: "#e7fff4",
      decor: card7,
    },
    {
      title: "Pink Parade",
      url: "pink-parade",
      img: card8_img,
      bgColor: "#ffe6f2",
      decor: card8,
    },
    {
      title: "The Bookish mark",
      url: "the-bookish-mark",
      img: card9_img,
      bgColor: "#ffeedd",
      decor: card9,
    },
    {
      title: "Wearable Whimpsy",
      url: "wearable-whimpsy",
      img: card10_img,
      bgColor: "#f7f7f7",
      decor: card10,
    },
    {
      title: "A little extra",
      url: "a-little-extra",
      img: card11_img,
      bgColor: "#ffe6eb",
      decor: card11,
    },
    {
      title: "Hold it pretty",
      url: "hold-it-pretty",
      img: card12_img,
      bgColor: "#f0f6ff",
      decor: card12,
    },
  ];

  // 🆕 Calculate dropdown position from the search bar's real screen position
  const updateDropdownPosition = () => {
    if (searchBarRef.current) {
      const rect = searchBarRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "fixed", // escapes ALL parent overflow/clip
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        // also check if click is inside the portal dropdown
        const dropdown = document.getElementById("search-dropdown-portal");
        if (dropdown && dropdown.contains(e.target)) return;
        setShowDropdown(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Recalculate position on scroll/resize so dropdown stays aligned
  useEffect(() => {
    if (showDropdown) {
      window.addEventListener("scroll", updateDropdownPosition, true);
      window.addEventListener("resize", updateDropdownPosition);
      return () => {
        window.removeEventListener("scroll", updateDropdownPosition, true);
        window.removeEventListener("resize", updateDropdownPosition);
      };
    }
  }, [showDropdown]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setActiveIndex(-1);
    if (!val.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }
    const q = val.toLowerCase();
    const matched = ALL_SUGGESTIONS.filter((s) =>
      s.name.toLowerCase().includes(q),
    ).slice(0, 8);
    setSuggestions(matched);
    if (matched.length > 0) {
      updateDropdownPosition(); // 🆕 calc position before showing
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
      navigate(
        `/products/${suggestion.categorySlug}/${suggestion.productSlug}`,
      );
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
    else if (e.key === "ArrowUp") setActiveIndex((p) => Math.max(p - 1, -1));
    else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex])
        handleSuggestionClick(suggestions[activeIndex]);
      else handleSearch();
    } else if (e.key === "Escape") {
      setShowDropdown(false);
      setActiveIndex(-1);
    }
  };

  const handleChangeRoute = (url) => navigate(`/products/${url}`);

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

  // 🆕 Dropdown rendered via React Portal — completely outside parent DOM tree
  const dropdownPortal =
    showDropdown &&
    createPortal(
      <ul
        id="search-dropdown-portal"
        className={css.dropdown}
        style={dropdownStyle}
      >
        {suggestions.map((s, i) => (
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
            </span>
            <span className={css.suggestionBadge}>
              {s.type === "category" ? "Category" : s.categoryName}
            </span>
          </li>
        ))}
        <li className={css.seeAll} onMouseDown={handleSearch}>
          <FiSearch /> See all results for "<strong>{searchQuery}</strong>"
        </li>
      </ul>,
      document.body, // 🆕 renders directly into <body>, escaping all overflow:hidden parents
    );

  return (
    <MainContainer>
      <Helmet>
        <title>Our Collections - Small Time Artist</title>
        <meta
          name="description"
          content="Browse our unique collection of handcrafted products."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Collections - Small Time Artist"
        />
        <meta
          property="og:description"
          content="Browse our unique collection of handcrafted products."
        />
        <meta property="og:image" content={card1_img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Collections - Small Time Artist"
        />
        <meta
          name="twitter:description"
          content="Browse our unique collection of handcrafted products."
        />
        <meta name="twitter:image" content={card1_img} />
      </Helmet>
      <Breadcrumbs />
      <Section label="All product categories">
        <WrapperContainer className={css.heroWrapper}>
          {/* ── Search bar ── */}
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
                placeholder="Search products or categories..."
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

          {/* Portal dropdown — renders into <body> */}
          {dropdownPortal}

          <Heading level={1} className={css.heading}>
            Choose Your <span>Aesthetics</span>
          </Heading>

          <div className={css.gridContainer}>
            {gridItems.map((item, index) => (
              <div
                key={index}
                className={classNames(css.card, css[`card${index + 1}`])}
                style={{ backgroundColor: item.bgColor }}
                onClick={() => handleChangeRoute(item.url)}
              >
                <div className={css.cardContent}>
                  <Heading level={3} className={css.title}>
                    {item.title}
                  </Heading>
                  <FiArrowUpRight className={css.icon} />
                </div>
                <div className={css.imgCard}>
                  <img className={css.cardImg} src={item.img} alt="" />
                </div>
                <img className={css.decorImg} src={item.decor} alt="" />
              </div>
            ))}
          </div>
        </WrapperContainer>
      </Section>

      <Section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={classNames(css.featured)}
        label={"Featured products"}
      >
        <Heading
          className={classNames(css.heading, css.featuredHeading)}
          level="2"
        >
          Featured <span>Products</span>
        </Heading>
        <div
          className={classNames(css.scrollContainer, {
            [css.showScroll]: hovered,
            [css.hideScroll]: !hovered,
          })}
        >
          {featuredProducts?.list?.map((card, index) => (
            <div className={css.card} key={index}>
              <div className={css.imgContainer}>
                <img src={`${card.image}`} alt={card.title} loading="lazy" />
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className={(css.featured, css.faq)}
        label="Frequently Asked Questions"
      >
        <Heading
          className={classNames(css.featuredHeading, css.color)}
          level="2"
        >
          Frequently Asked Questions
        </Heading>
        <FAQ data={featuredProducts.faq} />
      </Section>
    </MainContainer>
  );
}

export default Products;
