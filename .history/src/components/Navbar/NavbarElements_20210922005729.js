import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled.img`
  width:120px;
  height:30px;
  margin-top: 8px;
  padding: 1px;
`

export const NavLink = styled(Link)`
  color: #000;
  font-size: 12px;
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
  
  &:hover {
    background-color: #15cdfc;;
    color: white;
    border-radius: 8%;
  }
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  width: 100vw;
  max-width: 100%;
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
`;

export const MenuSeparator = styled.li`
  list-style-type: none;
  background-color: #e8e8e8;
  width: 1px;
  height: 24px;
  margin-top: 2px;
  // margin-left: -1px;
  z-index: 1;
`