import React from "react";

import HealthComponent from "./HealthComponent";

import ImageBG from "../../../assets/helper/ImageBG";

import classes from './Gabinet.module.css';

import gabinet from '../../../assets/image/gabinet2.jpg';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const GabinetUSG = () => {

  return (
    <div>
      <ScrollToTop />
      <div className={classes.container}>
        <div className={classes.imageText}>
          <ImageBG />
          <div className={classes.centeredText}>GABINET USG</div>
        </div>
        <div>
          <div className={classes.address}>
            <h4>Adres:</h4>
            <div>Gabinet USG</div>
            <div>ul.Cicha 1</div>
            <div>11-111 Grzdów Zdrój</div>
          </div>
          <div className={classes.reservate}>
            <img className={classes.img} style={{ width: "30%" }} src={gabinet} alt="??" />
            <div className={classes.textReservate}>
              <div>Rezerwacja:</div>
              <div>tel: +48 121 212 121</div>
              <div>email: usg@usg.pl</div>
            </div>
          </div>
        </div>
        <HealthComponent />
      </div>
    </div>
  )
};

export default GabinetUSG;