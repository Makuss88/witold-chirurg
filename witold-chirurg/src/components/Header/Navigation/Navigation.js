import React from "react";

import { NavLink } from "react-router-dom";

import instagram from '../../../img/instagram.svg';
import facebook from '../../../img/facebook.png';

const Navigation = (props) => {
  return (
    <nav>
      <h3>moge logo</h3>
      <ul>
        <NavLink to='/'>
          <li>Main Futerko</li>
        </NavLink>
        <NavLink to='/gabinet-masazu' >
          <li>gabinet</li>
        </NavLink>
        <NavLink to='/kim-jestesmy' >
          <li>kim jesteśmy</li>
        </NavLink>
        <NavLink to='/contact' >
          <li>kontakt</li>
        </NavLink >
        <li>
          <img src={facebook} alt='' width='48' />
        </li>
        <li>
          <img src={instagram} alt='' width='48' />
        </li>
      </ul>
    </nav >
  )
}

export default Navigation;