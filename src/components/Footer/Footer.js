import React from "react";

// import { Maps } from "./Maps";
import Address from "./Address";

import classes from './Footer.module.css';
import PolandMaps from "./PolandMaps";

const Footer = (props) => {
  return (

    <div>
      {/* <Maps /> */}
      <section id="footer" className={classes.Footer}>
        <Address />
        <PolandMaps />
        <div>
          FORMULARZ
        </div>
      </section>
    </div>
  )
}

export default Footer;