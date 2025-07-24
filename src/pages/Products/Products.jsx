import classNames from "classnames";
import Heading from "../../components/Heading/Heading";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import { FiArrowUpRight } from "react-icons/fi";
import css from "./Products.module.css";
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

function Products() {
  const gridItems = [
    {
      title: "Frame Your Phone",
      img: card1_img,
      bgColor: "#fff0e3",
      decor: card1,
    },
    {
      title: "Timeless Treasures",
      img: card2_img,
      bgColor: "#eee6ff",
      decor: card2,
    },
    {
      title: "Paper Whispers",
      img: card3_img,
      bgColor: "#f8f8f8",
      decor: card3,
    },
    {
      title: "Old soul kitchen",
      img: card4_img,
      bgColor: "#e5f7f9",
      decor: card4,
    },
    {
      title: "The Gogh Edit",
      img: card5_img,
      bgColor: "#ffffff",
      decor: card5,
    },
    {
      title: "Nestled Nook",
      img: card6_img,
      bgColor: "#e6e2da",
      decor: card6,
    },
    {
      title: "Muse & memo",
      img: card7_img,
      bgColor: "#e7fff4",
      decor: card7,
    },
    {
      title: "Pink Parade",
      img: card8_img,
      bgColor: "#ffe6f2",
      decor: card8,
    },
    {
      title: "The Bookish mark",
      img: card9_img,
      bgColor: "#ffeedd",
      decor: card9,
    },
    {
      title: "Strokes and Stories",
      img: card10_img,
      bgColor: "#f7f7f7",
      decor: card10,
    },
    {
      title: "A little extra",
      img: card11_img,
      bgColor: "#ffe6eb",
      decor: card11,
    },
    {
      title: "Hold it pretty",
      img: card12_img,
      bgColor: "#f0f6ff",
      decor: card12,
    },
  ];
  return (
    <MainContainer>
      <Section label="All product categories">
        <WrapperContainer className={css.heroWrapper}>
          <Heading level={1} className={css.heading}>
            Choose Your <span>Aesthetics</span>
          </Heading>
          <div className={css.gridContainer}>
            {gridItems.map((item, index) => (
              <div
                key={index}
                className={classNames(css.card, css[`card${index + 1}`])}
                style={{ backgroundColor: item.bgColor }}
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
    </MainContainer>
  );
}

export default Products;
