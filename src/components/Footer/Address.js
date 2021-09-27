import React from 'react'

import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { SiGooglemaps } from 'react-icons/si'

import classes from './Footer.module.css';

import logo from '../../assets/image/logo2.png';


const Address = () => {

  return (
    <div div className={classes.column} >
      <img src={logo} className={classes.logo} alt='' />
      <ul className={classes.widget}>
        <li>
          <SiGooglemaps className={classes.icon} />
          <span>Ul.Cicha 1<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11-111 Grzdów-Zdrój</span>
        </li>
        <li>
          <HiPhone className={classes.icon} />
          <span>+48 121 212 121 </span>
        </li>
        <li>
          <HiOutlineMail className={classes.icon} />
          <span>E-mail: usg@usg.pl</span>
        </li>
      </ul>
    </div>

  )
}

export default Address
