import React from "react";

import classes from './MainSection.module.css'

import logo from '../../img/usg-bioderek.jpg';

import ScrollToTop from "../ScrollToTop/ScrollToTop";

const MainSection = (props) => {
  return (
    <div className={classes.MainSection}>
      <ScrollToTop />
      <div>cała treść</div>
      <img className={classes.logo} src={logo} alt="??" />
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