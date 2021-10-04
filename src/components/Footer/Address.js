import React from 'react'

import logo from '../../assets/image/logo2.png';

import { EMail, Phone, Maps, Widget, Logo } from './FooterStyles'

const Address = () => {

  return (
    <div>
      <Logo src={logo} alt='' />
      <Widget>
        <li>
          <Maps />
          <span>Ul.Cicha 1<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11-111 Grzdów-Zdrój</span>
        </li>
        <li>
          <Phone />
          <span>+48 121 212 121 </span>
        </li>
        <li>
          <EMail />
          <span>E-mail: usg@usg.pl</span>
        </li>
      </Widget>
    </div>

  )
}

export default Address
