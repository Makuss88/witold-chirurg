import React, { useState } from 'react';
import { MenuSeparator, NavLink, Nav, NavMenu } from "./NavbarElements";

import classes from './Navbar.module.css'

import logo from '../../assets/image/logo2.png';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 279) {
      setNavbar(true);
    } else if (window.scrollY < 260) {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <Nav className={navbar ? classes.nav + " " + classes.active : classes.nav} >
      <img className={navbar ? classes.logo + " " + classes.active : classes.logo} src={logo} alt='' />
      <NavMenu>
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
      </NavMenu>
    </Nav >
  )
}

export default Navbar;