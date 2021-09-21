import { Nav, NavMenu, MenuSeparator, Logo, NavLink } from "./NavbarElements";

import logo from '../../img/gabinet-usg-logo.png';

const Navbar = () => {

  return (
    <Nav>
      <Logo src={logo} alt='' />
      <NavMenu>
        <NavLink to='/' exact  >
          STRONA GŁÓWNA
        </NavLink>
        <MenuSeparator />
        <NavLink to='/gabinet-masazu'  >
          GABINET MASAŻU
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