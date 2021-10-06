import { Link } from 'react-router-dom';
import { FooterBottomWrapper } from './FooterStyles';

const FooterBottom = () => {
  return (
    <FooterBottomWrapper>
      <p>&copy; 2021 GabinetUSG.pl / Wdrożenie Grzegorz Maciborek: <Link to='/contact/'>Makuss</Link></p>
    </FooterBottomWrapper>)
}

export default FooterBottom;
