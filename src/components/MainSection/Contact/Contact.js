import React from "react";
import ImageBG from "../../../assets/helper/ImageBG";
import MyMap from "./Maps";
import Address from './Address';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const Contact = (props) => {

  return (
    <div>
      <ScrollToTop />
      <ImageBG />
      <MyMap />
      <Address />
    </div>
  )
};

export default Contact;