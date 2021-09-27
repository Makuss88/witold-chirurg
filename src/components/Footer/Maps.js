import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react'

export class Maps extends React.Component {
  render() {
    const mapStyles = {
      width: "25%",
      height: "25%",
    };
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAx_uPg837tougQye5dIU_Z7BDlrVL-o7o"
})(Maps);