import React from 'react';

import img1 from '../../../assets/image/logo/logo1.png';
import img2 from '../../../assets/image/logo/logo2.png';
import img3 from '../../../assets/image/logo/logo3.png';
import img4 from '../../../assets/image/logo/logo4.png';
import img5 from '../../../assets/image/logo/logo5.png';
import img6 from '../../../assets/image/logo/logo6.png';
import img7 from '../../../assets/image/logo/logo7.png';
import img8 from '../../../assets/image/logo/logo8.png';
import img9 from '../../../assets/image/logo/logo9.png';
import img10 from '../../../assets/image/logo/logo10.png';
import img11 from '../../../assets/image/logo/logo11.png';
import img12 from '../../../assets/image/logo/logo12.png';
import img13 from '../../../assets/image/logo/logo13.png';

import { Flex, Section, Img } from './CompanyStyled';
import ScrollToTop from '../../../assets/helper/ScrollToTop';

const Company = () => {
  return (
    <>
      <ScrollToTop />
      <Section>
        <h1>
          NASZE MASZYNY DO USG MIAŁY PRZYJEMNOŚĆ DZIAŁAĆ MIĘDZY INNYMI DLA:
        </h1>
        <Flex>
          <Img src={img1} alt='' />
          <Img src={img2} alt='' />
          <Img src={img3} style={{ height: '100px' }} alt='' />
          <Img src={img4} alt='' />
          <Img src={img5} alt='' />
          <Img src={img6} alt='' />
          <Img src={img7} alt='' />
          <Img src={img8} alt='' />
          <Img src={img9} alt='' />
          <Img src={img10} alt='' />
          <Img src={img11} alt='' />
          <Img src={img12} alt='' />
          <Img src={img13} alt='' />
        </Flex>
      </Section>
    </>
  )
}

export default Company;