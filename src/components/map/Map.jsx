import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  const { google } = props;

  // Dummy location coordinates
  const dummyLocation = {
    lat: 28.6139,
    lng: 77.2090,
  };

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={dummyLocation}
    >
      <Marker position={dummyLocation} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
})(MapContainer);