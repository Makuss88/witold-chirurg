import styled from 'styled-components';

import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { SiGooglemaps } from 'react-icons/si'

export const FooterBottomWrapper = styled.section`
  padding: 40px;
  color: white;
  background: #121212;
  
  a{
    color: white;
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  width: 180px;
`;

export const Widget = styled.div`
  padding: 10px;
  font-size: 18px;
  text-align: left;
  `;

export const EMail = styled(HiOutlineMail)`
  margin-right: 20px;
  `;

export const Maps = styled(SiGooglemaps)`
  margin-right: 20px;
  `;

export const Phone = styled(HiPhone)`
  margin-right: 20px;
  `;


export const Wrapper = styled.div`
  background-color: #252525;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  color: #ffffff;
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-direction: row;

`;

export const Text = styled.h1`
  font-size: 30px;
`;
