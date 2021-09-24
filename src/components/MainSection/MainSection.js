import React from "react";

import classes from './MainSection.module.css'

import logo from '../../img/usg-bioderek.jpg';

import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ChangeImage from "./ChangeImage/ChangeImage";

const MainSection = (props) => {
  return (
    <div className={classes.MainSection}>
      <ScrollToTop />
      <ChangeImage />
      {/* <img className={classes.logo} src={logo} alt="??" /> */}
      <div>
        <p>
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa

          dupadupadupadupadupadupadupadupadupadupadupa
        </p>
        <p>
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa

          dupadupadupadupadupadupadupadupadupadupadupa
        </p>
        <p>
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa
          dupadupadupadupadupadupadupadupadupadupadupa

          dupadupadupadupadupadupadupadupadupadupadupa
        </p>
      </div>
    </div>

  )
}

export default MainSection;