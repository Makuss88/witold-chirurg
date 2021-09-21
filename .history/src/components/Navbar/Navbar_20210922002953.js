import { Nav, NavMenu, MenuSeparator, Logo, NavLink } from "./NavbarElements";

import logo from '../../img/gabinet-usg-logo.png';

const Navbar = () => {

  return (
    <Nav>
      <Logo src={logo} alt='' />
      <NavMenu>
        <NavLink to='/' exact activeStyle >
          STRONA GŁÓWNA
        </NavLink>
        <MenuSeparator />
        <NavLink to='/gabinet-masazu' activeStyle >
          GABINET MASAŻU
        </NavLink>
        <MenuSeparator />
        <NavLink to='/kim-jestesmy' activeStyle>
          KIM JESTEŚMY
        </NavLink>
        <MenuSeparator />
        <NavLink to='/galery' activeStyle>
          GALERIA
        </NavLink >
        <MenuSeparator />
        <NavLink to='/contact' activeStyle>
          KONTAKT
        </NavLink >
      </NavMenu>
    </Nav >
  )
}

export default Navbar;