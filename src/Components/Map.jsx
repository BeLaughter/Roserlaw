import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[6.816834651050481, 3.926274250588286]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker */}
      <Marker position={[6.816834651050481, 3.926274250588286]}>
        <Popup>📍 This is a marker!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
