import React from 'react'
import {Wrapper} from './GaleriaStyled';

import HowWeWork from './HowWeWork';

import ChangeImage from './ChangeImage/ChangeImage';
const Galeria = () => {
  return (
    <Wrapper>
      <HowWeWork />
      <ChangeImage />
    </Wrapper>
  )
}

export default Galeria;