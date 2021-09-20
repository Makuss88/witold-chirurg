import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

import styled from "styled-components";

import { Nav, NavLink, NavMenu, Bars, Button, ButtonMenu } from "./NavbarElements";

import logo from '../../img/wazEskulapa.jpg';

const Logo = styled.img`
  width: 60px;
`

const Navbar = (props) => {

  return (
    <Nav>
      <NavLink to='/'>
        <Logo src={logo} alt='' />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='/' exact activeStyle >
          STRONA GŁÓWNA
        </NavLink>
        <NavLink to='/gabinet-masazu' activeStyle >
          GABINET MASAŻU
        </NavLink>
        <NavLink to='/kim-jestesmy' activeStyle>
          KIM JESTEŚMY
        </NavLink>
        <NavLink to='/galery' activeStyle>
          GALERIA
        </NavLink >
        <NavLink to='/contact' activeStyle>
          KONTAKT
        </NavLink >
      </NavMenu>
      <ButtonMenu>
        <IconContext.Provider value={{ size: "2em" }}>
          <Button onClick={() => { console.log('Facebook') }}><FaFacebook /></Button>
          <Button onClick={() => { console.log('Insta') }}><FaInstagram /></Button>
        </IconContext.Provider>
      </ButtonMenu>

    </Nav >
  )
}

export default Navbar;