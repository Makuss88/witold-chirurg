import React, { useState } from 'react';
import {
  MenuSeparator,
  NavLink,
  NavMenu,
  NavStyles,
  Logo
} from "./NavbarElements";

import logo from '../../../assets/image/logoGabinetu.png';

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
    <NavStyles
      fontSize={navbar ? "1em" : "1.4em"}
      height={navbar ? '100px' : '140px'}
      bg={navbar ? "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(170, 170, 170) 100%)" : "rgba(128, 128, 128, 0.637)"}
    >
      <Logo height={navbar ? '60px' : '90px'} src={logo} alt='' />
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
    </NavStyles>
  )
}

export default Navbar;