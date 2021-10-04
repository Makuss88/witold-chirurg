import { NavLink } from 'react-router-dom';
import { FooterBottomWrapper } from './FooterStyles';

const FooterBottom = () => {
  return (
    <FooterBottomWrapper>
      <p>© 2021 GabinetUSG.pl / Wdrożenie Grzegorz Maciborek: <NavLink to='/contact/'>Makuss</NavLink></p>
    </FooterBottomWrapper>)
}

export default FooterBottom;
