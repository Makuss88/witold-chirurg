import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

import styled from "styled-components";

const Maps = styled.div`
  position: flex;
  margin: auto;
  border: 2px solid blue;
  height: 454px;
  width: 804px;
`;

const MyMap = () => {
  const anchor = [50.04902171159419, 19.24178623208044];

  return (
    <Maps>
      <Map height={450}
        width={800}
        defaultCenter={anchor}
        defaultZoom={15}
        metaWheelZoom={true}
      >
        <Marker
          width={40}
          anchor={anchor}
          color={'black'}
        />
        <ZoomControl />
      </Map>
    </Maps>
  )
}

export default MyMap;