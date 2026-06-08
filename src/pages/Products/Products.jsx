import { useLocation, useNavigate } from "react-router";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FAQ from "../../components/Faq/Faq";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import { FiArrowUpRight } from "react-icons/fi";
import Heading from "../../components/Heading/Heading";
import { Helmet } from "react-helmet-async";
import MainContainer from "../../components/MainContainer/MainContainer";
import ProductSearch from "../../components/ProductSearch/ProductSearch";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import aLittleExtraDecor from "../../assets/decorations/products/card11_decor.svg";
import aLittleExtraImg from "../../assets/content/products/grid_sec/little_extra.png";
import classNames from "classnames";
import css from "./Products.module.css";
import featuredProducts from "../../data/products/featured.json";
import frameYourPhoneDecor from "../../assets/decorations/products/card1_decor.svg";
import frameYourPhoneImg from "../../assets/content/products/grid_sec/frame-your-phone.png";
import holdItPrettyDecor from "../../assets/decorations/products/card12_decor.svg";
import holdItPrettyImg from "../../assets/content/products/grid_sec/hold-it-pretty.png";
import museAndMemoDecor from "../../assets/decorations/products/card7_decor.svg";
import museAndMemoImg from "../../assets/content/products/grid_sec/muse-and-memo.png";
import nestledNookDecor from "../../assets/decorations/products/card6_decor.svg";
import nestledNookImg from "../../assets/content/products/grid_sec/nestled-nook.png";
import oldSoulKitchenDecor from "../../assets/decorations/products/card4_decor.svg";
import oldSoulKitchenImg from "../../assets/content/products/grid_sec/old-soul-kitchen.png";
import paperWhispersDecor from "../../assets/decorations/products/card3_decor.svg";
import paperWhispersImg from "../../assets/content/products/grid_sec/paper-whispers.png";
import theGoghEditDecor from "../../assets/decorations/products/card5_decor.svg";
import theGoghEditImg from "../../assets/content/products/grid_sec/the-gogh-edit.png";
import timelessTreasuresDecor from "../../assets/decorations/products/card2_decor.svg";
import timelessTreasuresImg from "../../assets/content/products/grid_sec/timeless_treasures.png";
import wearableWhimpsyDecor from "../../assets/decorations/products/card10_decor.svg";
import wearableWhimpsyImg from "../../assets/content/products/grid_sec/wearable_whimpsy.png";

function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  const shouldFocusSearch = new URLSearchParams(location.search).get("focus") === "1";

  const gridItems = [
    {
      title: "Frame Your Phone",
      url: "frame-your-phone",
      img: frameYourPhoneImg,
      bgColor: "#fff0e3",
      decor: frameYourPhoneDecor,
    },
    {
      title: "Timeless Treasures",
      url: "timeless-treasures",
      img: timelessTreasuresImg,
      bgColor: "#eee6ff",
      decor: timelessTreasuresDecor,
    },
    {
      title: "Paper Whispers",
      url: "paper-whispers",
      img: paperWhispersImg,
      bgColor: "#f8f8f8",
      decor: paperWhispersDecor,
    },
    {
      title: "Old Soul Kitchen",
      url: "old-soul-kitchen",
      img: oldSoulKitchenImg,
      bgColor: "#e5f7f9",
      decor: oldSoulKitchenDecor,
    },
    {
      title: "The Gogh Edit",
      url: "the-gogh-edit",
      img: theGoghEditImg,
      bgColor: "#ffffff",
      decor: theGoghEditDecor,
    },
    {
      title: "Nestled Nook",
      url: "nestled-nook",
      img: nestledNookImg,
      bgColor: "#e6e2da",
      decor: nestledNookDecor,
    },
    {
      title: "Muse & memo",
      url: "muse-and-memo",
      img: museAndMemoImg,
      bgColor: "#e7fff4",
      decor: museAndMemoDecor,
    },
    {
      title: "Wearable Whimpsy",
      url: "wearable-whimpsy",
      img: wearableWhimpsyImg,
      bgColor: "#f7f7f7",
      decor: wearableWhimpsyDecor,
    },
    {
      title: "A little extra",
      url: "a-little-extra",
      img: aLittleExtraImg,
      bgColor: "#ffe6eb",
      decor: aLittleExtraDecor,
    },
    {
      title: "Hold it pretty",
      url: "hold-it-pretty",
      img: holdItPrettyImg,
      bgColor: "#f0f6ff",
      decor: holdItPrettyDecor,
    },
  ];

  const handleChangeRoute = (url) => navigate(`/products/${url}`);

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
        <meta property="og:image" content={frameYourPhoneImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Collections - Small Time Artist"
        />
        <meta
          name="twitter:description"
          content="Browse our unique collection of handcrafted products."
        />
        <meta name="twitter:image" content={frameYourPhoneImg} />
      </Helmet>
      <Breadcrumbs />
      <Section label="All product categories">
        <WrapperContainer className={css.heroWrapper}>
          <ProductSearch autoFocus={shouldFocusSearch} />

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

      <FeaturedProducts data={featuredProducts?.list} />

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
