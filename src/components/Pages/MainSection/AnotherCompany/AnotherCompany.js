import React from 'react';

import img1 from '../../../../assets/image/logo/logo1.png';
import img2 from '../../../../assets/image/logo/logo2.png';
import img3 from '../../../../assets/image/logo/logo3.png';
import img4 from '../../../../assets/image/logo/logo4.png';
import img5 from '../../../../assets/image/logo/logo5.png';

import { Animation, Wrapper, Gallery, Img } from './AnotherCompanyStyled';

const AnotherCompany = () => {
  return (
    <Wrapper>
      <h1>
        Tutaj mozesz klinąć aby zobazczyć wiecej naszym firm co nam ufają!
      </h1>
      <Animation to="/company" exact> Zobacz więcej firm </Animation >
      <Gallery>
        <Img src={img1} alt='think' />
        <Img src={img2} alt='tuti' />
        <Img src={img3} style={{ height: "100px", margin: 'auto 0' }} alt='rumble' />
        <Img src={img4} alt='starbucks' />
        <Img src={img5} alt='kulbu' />
      </Gallery>
    </Wrapper>
  )
}

export default AnotherCompany;
