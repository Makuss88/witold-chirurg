import React from 'react';

import logo from '../../assets/image/logoGabinetu.png';
import { FlexColumn } from '../Pages/Contact/FormStyled';

import { EMail, Phone, Maps, Widget, Logo, WrapperIcon } from './FooterStyles';

const Address = () => {

  return (
    <div>
      <Logo src={logo} alt='logo' />
      <Widget>
        <WrapperIcon>
          <Maps />
          <FlexColumn>
            <span>Ul.Cicha 1</span>
            <span>11-111 Grzdów-Zdrój</span>
          </FlexColumn>
        </WrapperIcon>
        <WrapperIcon>
          <Phone />
          <span>+48 121 212 121 </span>
        </WrapperIcon>
        <WrapperIcon>
          <EMail />
          <span>E-mail: usg@usg.pl</span>
        </WrapperIcon>
      </Widget>
    </div>

  )
}

export default Address
