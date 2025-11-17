import { useEffect, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapContext } from "../context/MapContext.tsx";

export default function Map() {
  const { lat, lng } = useMapContext();

  const mapRef = useRef(null);
  const latitude = 51.505;
  const longitude = -0.09;

  const mapOptions = {
    center: [lat, lng],
    zoom: 13,
    maxZoom: 18,
    minZoom: 5,
  };

  useEffect(() => {
    console.log(lat);
    console.log(lng);
  }, [lat, lng]);

  return (
    <>
      <MapContainer
        center={{ lat: latitude, lng: longitude }}
        zoom={13}
        scrollWheelZoom={false}
        ref={mapRef}
        style={{ height: "500px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]} />
      </MapContainer>
    </>
  );
}
