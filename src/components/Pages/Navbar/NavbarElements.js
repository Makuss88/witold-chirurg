import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: #002340;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 15px;
  height: 100%;
  cursor: pointer;

  &.active {
    background-color: #002340;
    color: white;
    border-radius: 10%;
  }
  
  &:hover {
    background-color: #002340;
    color: white;
    border-radius: 10%;
  }
`;

export const MenuSeparator = styled.li`
  list-style-type: none;
  background-color: #e8e8e8;
  width: 1px;
  height: 24px;
  margin-top: 2px;
  z-index: 1;
`;

export const NavStyles = styled.div`
  background: ${({ bg }) => bg};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  font-family: "Helvetica";
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize};
  height: ${({ height }) => height};
  justify-content: center;
  padding: 25px 80px;
  width: 100%;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(50, 50, 50, 0.6);
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

export const Logo = styled.img`
  padding-right: 100px;
  height: ${props => props.height};
`;