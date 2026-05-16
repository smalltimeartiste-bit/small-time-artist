import CustomButton from "../../components/Buttons/Buttons";
import Heading from "../../components/Heading/Heading";
import { Helmet } from "react-helmet-async";
import HeroImg from "../../assets/page/LandingPage/STA_HeroImg.png";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import css from "./Landing.module.css";
import decorationLand from "../../assets/decorations/landing.png";
// assets import
import flowerTree from "../../assets/decorations/flower_tree.svg";
import glimpseHead from "../../assets/decorations/glimpse_head.svg";
import glimpseTree from "../../assets/decorations/flower_tree2.svg";
import instagramLinks from "../../assets/content/instagram/instagram-links.json";
import pinkPetals from "../../assets/decorations/pink_petals.svg";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  const creativeProcess = [
    {
      title: "Get In Touch",
      description:
        "Drop a message & step into her world of artistry—your vision starts here.",
    },
    {
      title: "Consultation",
      description:
        "She listens, brainstorms, and refines, as every masterpiece starts with a great idea.",
    },
    {
      title: "Delivery & Enjoy",
      description:
        "Handcrafted with love, delivered with care—unwrap joy in every piece.",
    },
  ];

  const imageGallery = instagramLinks.posts || [];
  const instagramProfileUrl = instagramLinks.profileUrl;

  const handleRedirect = () => {
    navigate("/products");
  };

  return (
    <MainContainer>
      <Helmet>
        <title>Small Time Artist - Handcrafted Artistry & Creative Works</title>
        <meta
          name="description"
          content="Discover unique handcrafted products and artistic creations. From phone frames to home decor, each piece is crafted with love and creativity."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Small Time Artist - Handcrafted Artistry & Creative Works"
        />
        <meta
          property="og:description"
          content="Discover unique handcrafted products and artistic creations. From phone frames to home decor, each piece is crafted with love and creativity."
        />
        <meta property="og:image" content={HeroImg} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Small Time Artist - Handcrafted Artistry & Creative Works"
        />
        <meta
          name="twitter:description"
          content="Discover unique handcrafted products and artistic creations. From phone frames to home decor, each piece is crafted with love and creativity."
        />
        <meta name="twitter:image" content={HeroImg} />
      </Helmet>
      <Section
        className={css.herosec}
        label={"Introduction of Smalltime Artiste"}
      >
        <WrapperContainer className={css.heroWrapper}>
          <div className={css.headingSec}>
            <Heading level={1} className={css.heading}>
              Smalltime <span>Artiste</span>
            </Heading>
            <Heading level={2} className={css.heading2}>
              She Does What She Loves
              <br />
              She Loves What She Creates
            </Heading>
          </div>
          <div className={css.imgCont}>
            <img
              className={css.heroImg}
              src={HeroImg}
              alt="Gallery Preview"
              loading="lazy"
            />
          </div>
          <div className={css.cta}>
            <CustomButton
              onClick={handleRedirect}
              outward
              className={css.ctaBtn}
              primary
            >
              Explore Her Art
            </CustomButton>
          </div>
        </WrapperContainer>
        <img className={css.treePos} src={flowerTree} alt="" />
        <img className={css.flowerPos} src={pinkPetals} alt="" />
      </Section>
      <Section className={css.decorSec} label={"Decor"}>
        <img
          className={css.landDecor}
          src={decorationLand}
          alt=""
          loading="lazy"
        />
      </Section>
      <Section label={"Her Creative Process"}>
        <WrapperContainer className={css.creativeProcessSection}>
          <div className={css.creativeProcessGrid}>
            {creativeProcess.map((data, i) => (
              <div className={css.processStep} key={i}>
                <Heading level={3} className={css.processTitle}>
                  {data.title}
                </Heading>
                <p className={css.processDescription}>{data.description}</p>
              </div>
            ))}
          </div>
        </WrapperContainer>
      </Section>
      <Section className={css.glimSec} label={"A glimpse into her world"}>
        <WrapperContainer className={css.glimpseContainer}>
          <div className={css.glimpseHeadContainer}>
            <img className={css.glimpseHeadLogo} src={glimpseHead} alt="" />
            <Heading level={2} className={css.glimpseHeading}>
              Get a glimpse into her world
            </Heading>
          </div>

          {/* <div className={css.gridContainer}>
            {imageGallery.map((link, i) => (
              <div key={i} className={css.gridCard}>
                <iframe
                  src={`${link}/embed`}
                  className={css.instaFrame}
                  allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                />
              </div>
            ))}
          </div> */}

          {/* new grid container  */}
          <div className={css.gridContainer}>
            {imageGallery.map((link, i) => (
              <div key={i} className={css.gridCard}>
                <iframe
                  src={`${link}/embed`}
                  className={css.instaFrame}
                  allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  title={`Instagram post ${i + 1}`}
                />
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.instaLinkBtn}
                >
                  Open on Instagram
                </a>
              </div>
            ))}
          </div>
        </WrapperContainer>
        <img className={css.glimpseTreePos} src={glimpseTree} alt="" />
      </Section>
    </MainContainer>
  );
};

export default LandingPage;
