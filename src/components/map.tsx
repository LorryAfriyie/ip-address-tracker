import { useEffect, type CSSProperties } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapContext } from "../context/MapContext.tsx";

type MyComponentProps = {
  lat: number;
  lng: number;
};

const mapStyles: CSSProperties = {
  height: "100vh",
  width: "100%",
  zIndex: "0",
  position: "relative",
};

function MyComponent({ lat, lng }: MyComponentProps) {
  const map = useMap();
  map.setView([lat, lng]);
  return null;
}

export default function Map() {
  const { lat, lng } = useMapContext();

  const mapProps = {
    center: [0, 0],
    zoom: 15,
    scrollWheelZoom: false,
    style: mapStyles,
  };

  useEffect(() => {
    console.log(lat);
    console.log(lng);
  }, [lat, lng]);

  return (
    <>
      <MapContainer {...mapProps}>
        <MyComponent lat={lat} lng={lng} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]} />
      </MapContainer>
    </>
  );
}
