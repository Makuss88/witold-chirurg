import React from "react";

import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { SiGooglemaps } from 'react-icons/si'
import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <section id="footer" className={classes.Footer}>
      <div class="grid">
        <div className={classes.column}>
          <ul className={classes.widget}>
            <li>
              <SiGooglemaps />
              <span>Ul.Wysoka 2<br />32-600 Oświecim</span>
            </li>
            <li>
              <HiPhone />
              <span>+48 121 212 121 </span>
            </li>
            <li>
              <HiOutlineMail />
              <span>E-mail: usg@usg.pl</span>
            </li>
          </ul>
        </div>

        <div className={classes.column}>
          <h5 class="section-nav-title">TU BYLIŚMY</h5>
          <p>
            <img src="http://serwer1451444.home.pl/wp-content/uploads/2017/04/mapa-do-stopki.png" alt='logo' />
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer;