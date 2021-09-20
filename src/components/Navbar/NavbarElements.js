import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  width: 100vw;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 16px;
  font-family: "Helvetica";
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  position: relative;
  background-color: black;
  border: none;
  font-size: 12px;
  color: #FFFFFF;
  margin: 4px;
  width: 40px;
  height: 40px;
  text-decoration: none;
  cursor: pointer;
`;

export const ButtonMenu = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
