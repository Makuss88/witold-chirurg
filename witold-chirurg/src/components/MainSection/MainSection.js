import React from "react";

import classes from './MainSection.module.css'

import logo2 from '../../img/logoUSG.png';

import ScrollToTop from "../ScrollToTop/ScrollToTop";

const MainSection = (props) => {

  return (
    <div className={classes.MainSection}>
      <ScrollToTop />
      <div>cała treść</div>
      <img className={classes.logo} src={logo2} alt="??" />
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
          dupa
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
          dupa
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
          dupa
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
          dupa
        </p>
      </div>
    </div>
  )
}

export default MainSection;