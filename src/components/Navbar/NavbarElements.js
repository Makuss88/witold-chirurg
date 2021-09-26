import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  color: black;
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

export const MenuSeparator = styled.li`
  list-style-type: none;
  background-color: #e8e8e8;
  width: 1px;
  height: 24px;
  margin-top: 2px;
  z-index: 1;
`;
