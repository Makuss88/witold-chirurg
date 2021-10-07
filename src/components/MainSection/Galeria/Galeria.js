import React from 'react'
import { Wrapper } from '../../../assets/helper/Styled';

import ScrollToTop from '../../../assets/helper/ScrollToTop';
import HowWeWork from './HowWeWork';

import ChangeImage from './ChangeImage/ChangeImage';
const Galeria = () => {
  return (
    <Wrapper>
      <ScrollToTop />
      <HowWeWork />
      <ChangeImage />
    </Wrapper>
  )
}

export default Galeria;