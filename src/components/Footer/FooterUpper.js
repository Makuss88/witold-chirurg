import React from "react";

// import { Maps } from "./Maps";
import Address from "./Address";

import PolandMaps from "./PolandMaps";

import { Wrapper } from './FooterStyles';

const FooterUpper = () => {
  return (
    <Wrapper>
      <Address />
      <PolandMaps />
      <div>
        FORMULARZ
      </div>
    </Wrapper>
  )
}

export default FooterUpper;