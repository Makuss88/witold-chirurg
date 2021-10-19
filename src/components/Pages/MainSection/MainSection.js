import React from "react";

import { Wrapper } from "../../../assets/helper/Styled";
import MainText from './MainText/MainText';
import ScrollToTop from "../../../assets/helper/ScrollToTop";
import Contact from './Contact/Contact';


const MainSection = () => {
  return (
    <Wrapper>
      <ScrollToTop />
      <MainText />
      <Contact />
      referencje
    </Wrapper >
  )
}

export default MainSection;