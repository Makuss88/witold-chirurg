import styled from 'styled-components';
import img1 from '../../../../assets/image/laptopContact.jpg';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;  
`;

export const Text = styled.p`
  color: white;
  margin: 50px auto;
  padding: 10px;
  background-image: url(${img1});
  background-repeat: no-repeat;
  filter: grayscale(50%) brightness(70%);
  width: 1800px;
  height: 600px;
`;

export const H1 = styled.h1`
  margin: 50px;
  font-size: 40px;
`;

export const H2 = styled.h2`
  font-size: 20px; 
`;

export const NavLink = styled(Link)`
	background: #ed3330;
  margin-top: 50px;
	color: #fff !important;
  font-size: 20px;
	text-decoration: none;
	padding: 30px 60px;
	border-radius: 10px;
	display: inline-block;
	transition: all 0.4s ease 0s;

  &:hover{
    background: #434343;
	  letter-spacing: 2px;
	  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	  box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
  }
`;