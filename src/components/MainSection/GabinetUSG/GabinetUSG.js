import React from "react";

import HealthComponent from "./HealthComponent";

import classes from './Gabinet.module.css';

import gabinet from '../../../assets/image/gabinet2.jpg';
import bgAll from '../../../assets/image/bgAll.jpg';

const GabinetUSG = (props) => {

  return (
    <div className={classes.container}>
      <div className={classes.imageText}>
        <img className={classes.bg} src={bgAll} alt='background' />
        <div className={classes.centeredText}>GABINET USG</div>
      </div>
      <div>
        <div className={classes.address}>
          <h4>Adres:</h4>
          Gabinet USG
          <br />ul.Wysoka 2, Oświęcim
          {/* dodanie mapki, to nie ejst żaden problem..., chyba... */}
        </div>
        <div className={classes.reservate}>
          <img className={classes.img} style={{ width: "30%" }} src={gabinet} alt="??" />
          <div className={classes.textReservate}>
            Rezerwacja: <br />
            tel: +48 121 212 121 <br />
            email: usg@usg.pl
          </div>
        </div>
      </div>
      <HealthComponent />
    </div>
  )
};

export default GabinetUSG;