import classNames from "classnames";
import Heading from "../../components/Heading/Heading";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import { FiArrowUpRight } from "react-icons/fi";
import css from "./Products.module.css";

function Products() {
  const gridItems = [
    {
      title: "Frame Your Phone",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#fff0e3",
    },
    {
      title: "Timeless Treasures",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#eee6ff",
    },
    {
      title: "Paper Whispers",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#f8f8f8",
    },
    {
      title: "Old soul kitchen",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#e5f7f9",
    },
    {
      title: "The Gogh Edit",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#ffffff",
    },
    {
      title: "Nestled Nook",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#e6e2da",
    },
    {
      title: "Muse & memo",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#e7fff4",
    },
    {
      title: "Pink Parade",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#ffe6f2",
    },
    {
      title: "The Bookish mark",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#ffeedd",
    },
    {
      title: "Strokes and Stories",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#f7f7f7",
    },
    {
      title: "A little extra",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#ffe6eb",
    },
    {
      title: "Hold it pretty",
      img: "/639e2a6b-eceb-461a-b85e-d7ed83d9297d.png",
      bgColor: "#f0f6ff",
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
              </div>
            ))}
          </div>
        </WrapperContainer>
      </Section>
    </MainContainer>
  );
}

export default Products;
