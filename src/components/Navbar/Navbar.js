import React, { useState } from 'react';
import { MenuSeparator, NavLink } from "./NavbarElements";

import classes from './Navbar.module.css'

import logo from '../../assets/image/logo2.png';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 279) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? classes.nav + " " + classes.active : classes.nav} >
      <img className={navbar ? classes.logo + " " + classes.active : classes.logo} src={logo} alt='' />
      <div className={classes.navMenu}>
        <NavLink to='/' exact >
          STRONA GŁÓWNA
        </NavLink>
        <MenuSeparator />
        <NavLink to='/gabinet-usg'  >
          GABINET USG
        </NavLink>
        <MenuSeparator />
        <NavLink to='/kim-jestesmy' >
          KIM JESTEŚMY
        </NavLink>
        <MenuSeparator />
        <NavLink to='/galery' >
          GALERIA
        </NavLink >
        <MenuSeparator />
        <NavLink to='/contact' >
          KONTAKT
        </NavLink >
      </div>
    </nav >
  )
}

export default Navbar;