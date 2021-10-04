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
  padding-bottom: 20px;
`;

export const Widget = styled.div`
  height: 500px;
  padding: 10px;
  font-size: 18px;
  list-style-type: none;
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
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: #ffffff;
`;
