import React from "react";

// import { Maps } from "./Maps";
import Address from "./Address";

import classes from './Footer.module.css';
import PolandMaps from "./PolandMaps";

const Footer = () => {
  return (
    <section id="footer" className={classes.Footer}>
      <Address />
      <PolandMaps />
      <div>
        FORMULARZ
      </div>
    </section>
  )
}

export default Footer;