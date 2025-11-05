import { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapContext } from "../context/MapContext.tsx";

export default function Map() {
  const mapRef = useRef(null),
    latitude = 0,
    longitude = 0;

  const { lat, lng } = useMapContext();

  useEffect(() => {
    console.log(lat);
    console.log(lng);
  }, [lat, lng]);

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      ref={mapRef}
      style={{ height: "500px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
