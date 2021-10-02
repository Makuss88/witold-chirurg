import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 40px;
`;

const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 40px;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 100%;
  /* margin-top: -100px; */
`;

const ImageBG = (props) => {
  const { image, title } = props
  return (
    <Wrapper>
      <Logo src={image} alt='logoBG' />
      <CenteredText>{title}</CenteredText>
    </Wrapper>
  )
}

export default ImageBG;
