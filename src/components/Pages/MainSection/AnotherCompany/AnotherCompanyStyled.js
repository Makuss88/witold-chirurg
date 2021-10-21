import styled from "styled-components";

import { Link } from 'react-router-dom';


export const Animation = styled(Link)`
  color: #be1e2d;
  text-decoration: none ;
  text-transform: uppercase;;
  font-size: 24px;
  
  &:after { 
    position: relative;
    top: 1px;
    content: "\u27BC";
    font-size: 28px;
    transition: all 0.5s;
  }
  
  &:hover {
    &::after{
      margin-left: 10px;
    }
    color: blue;
  }
`;

export const Wrapper = styled.div`
  padding: 40px;
  width: 100%;
  background: #e3e3e3;
`;

export const Gallery = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: space-evenly;
`;

export const Img = styled.img`
  width: 300px;
  filter: grayscale(0.99);
  transition: all 0.5s ease-in-out;

  &:hover{
    filter: grayscale(0.01);
  }
`;