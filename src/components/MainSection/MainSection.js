import React from "react";

import bg from '../../assets/image/bg.jpg';

import classes from './MainSection.module.css';

import ScrollToTop from "../ScrollToTop/ScrollToTop";
// import ChangeImage from "./ChangeImage/ChangeImage";

const MainSection = (props) => {
  return (
    <div>
      <ScrollToTop />
      <div className={classes.MainSection}>
        <img src={bg} className={classes.bg} alt="background" />
        {/* <img src={logo} alt="loading..." /> infresting :) */}
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
    </div>
  )
}

export default MainSection;