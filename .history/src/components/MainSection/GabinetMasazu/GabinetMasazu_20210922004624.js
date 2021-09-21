import React from "react";

import HealthComponent from "./HealthComponent";

import classes from './Gabinet.module.css'

import gabinet from '../../../img/gabinet1.jpg'
import gabinet2 from '../../../img/gabinet2.jpg'

const GabinetMasazu = (props) => {

  return (
    <div>
      <div className={classes.container}>
        <img className={classes.img} src={gabinet} alt="??" />
        <div className={classes.centeredText}>
          GABINET USG
        </div>
      </div>
      <div className={classes.address}>
        <h4>Adres:</h4>
        Gabinet USG
        <br />ul.Wysoka 2, Oświęcim
        {/* dodanie mapki, to nie ejst żaden problem..., chyba... */}
      </div>
    
      
    </div>
  )
};

export default GabinetMasazu;