import React from "react";

import { Wrapper } from "../../../assets/helper/Styled";
import MainText from './MainText/MainText';
import ScrollToTop from "../../../assets/helper/ScrollToTop";
import Contact from './Contact/Contact';
import Referencje from './Referencje/Referencje';
import AnotherCompany from './AnotherCompany/AnotherCompany';


const MainSection = () => {
  return (
    <Wrapper>
      <ScrollToTop />
      <MainText />
      <Contact />
      <Referencje />
      <AnotherCompany />
    </Wrapper >
  )
}

export default MainSection;