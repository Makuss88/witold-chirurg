import React from 'react';
import styled from 'styled-components';
import bgAll from '../image/bgAll.jpg';

const Logo = styled.img`
    width: 100%;
`;

const ImageBG = () => {
  return (
    <Logo src={bgAll} alt='logoBG' />
  )
}

export default ImageBG
