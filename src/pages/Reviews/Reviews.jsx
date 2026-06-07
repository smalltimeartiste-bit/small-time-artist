import Heading from "../../components/Heading/Heading";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import Slider from "react-slick";
import css from "./Reviews.module.css";
import data from "../../data/reviews.json";
import url from "../../data/url.json";

function Reviews() {
  const sliderSettings = {
    dots: true, // show on laptop/desktop
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false, // hide on tablet/mobile
          slidesToShow: 2.5,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1.5,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <MainContainer>
      <Section className={css.cont} label={data.label}>
        <Heading className={css.heading} level="1">
          {data.heading}
          <span>{data.highlight}</span>
        </Heading>
        <div className={"slider-container " + css.contSlider}>
          <Slider {...sliderSettings}>
            {data.images.map((e, i) => (
              <div key={i} className={css.cardCont}>
                <img
                  src={url.reviews_url + e.img}
                  alt="Reviews by customers"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Section>
    </MainContainer>
  );
}

export default Reviews;
