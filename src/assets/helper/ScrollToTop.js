import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import styled, { keyframes } from 'styled-components';

const ScrollTop = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  left: 85%;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #8b0000;
  color: #fff;
  z-index: 99;
`;

const rotate = keyframes`
  from {
    transform: translateY(6px);
  }
  
  to {
    transform: translateY(14px);
  }
`;

const Icon = styled.svg`
  animation: ${rotate} 0.6s alternate ease infinite;
`;

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 300) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <ScrollTop onClick={scrollToTop}>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 4 24 24">
        <path fill="white" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
      </Icon>
    </ScrollTop >
  );
};

export default ScrollToTop;