import Heading from "../../components/Heading/Heading";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import css from "./Landing.module.css";
import WrapperContainer from "../../components/Wrapper/WrapperContainer";
import CustomButton from "../../components/Buttons/Buttons";

// assets import
import flowerTree from "../../assets/decorations/flower_tree.svg";
import pinkPetals from "../../assets/decorations/pink_petals.svg";
import HeroImg from "../../assets/page/LandingPage/HeroImg1.png";

const LandingPage = () => {
  return (
    <MainContainer>
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
            <img className={css.heroImg} src={HeroImg} alt="Gallery Preview" />
          </div>
          <div className={css.cta}>
            <CustomButton outward className={css.ctaBtn} primary>Explore Her Art</CustomButton>
          </div>
        </WrapperContainer>
        <img className={css.treePos} src={flowerTree} alt="" />
        <img className={css.flowerPos} src={pinkPetals} alt="" />
      </Section>
    </MainContainer>
  );
};

export default LandingPage;
