import React from "react";

import Navigation from "./Navigation/Navigation";

import classes from './Header.module.css'

import logo from '../../img/wazEskulapa.jpg';

const Header = (props) => {
  return (
    <nav className={classes.navigation}>
      <img src={logo} className={classes.logo} alt='' />
      <Navigation />
    </nav >
  )
}

export default Header;