import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Section from "../../components/Section/SectionContainer";
import Heading from "../../components/Heading/Heading";
import css from "./Reviews.module.css";

function Reviews() {
  return (
    <MainContainer>
      <Section label={"A story Of Kind Words & Grateful Hearts"}>
        <Heading className={css.heading} level="1">
          A story Of Kind Words & <span>Grateful Hearts</span>
        </Heading>
      </Section>
    </MainContainer>
  );
}

export default Reviews;
