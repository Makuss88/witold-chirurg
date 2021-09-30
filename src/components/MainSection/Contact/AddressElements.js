import styled from 'styled-components';

import { Googlemaps } from '@styled-icons/simple-icons/Googlemaps';
import { TelephoneFill } from '@styled-icons/bootstrap/TelephoneFill';
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';

export const Container = styled.div`
  padding-top: 60px;
  display:flex;
  flex-direction: column;
  padding-bottom: 60px;
`;

export const Information = styled.div`
  padding-bottom: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  background: #be1e2d;
  border-radius: 100%;
`;

export const MapsLogo = styled(Googlemaps)` 
  width: 30px;
  height: 30px;
  z-index: 10;
  color: #f2f2f2;
`;

export const PhoneLogo = styled(TelephoneFill)` 
  width: 30px;
  height: 30px;
  z-index: 10;
  color: #f2f2f2;
`;

export const EmailLogo = styled(EmailOutline)` 
  width: 30px;
  height: 30px;
  z-index: 10;
  color: #f2f2f2;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(77, 77, 77);
  margin: 30px;
`;
