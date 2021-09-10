import React from "react";

import classes from './Header.module.css'

import logo from '../../img/wazEskulapa.jpg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.png';

const Header = (props) => {
  return (
    <nav className={classes.navigation}>
      <img src={logo} className={classes.logo} alt='' />
      <ul className={classes.navLinks}>
        <li><a href='#' >Strona główna</a></li>
        <li><a href='#' >Gabinet masażu</a></li>
        <li><a href='#' >Kim jesteśmy</a></li>
        <li><a href='#' >Kontakt</a></li>
        <li>
          <img src={facebook} alt='' width='48' />
        </li>
        <li>
          <img src={instagram} alt='' width='48' />
        </li>
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav >
  )
}

export default Header;