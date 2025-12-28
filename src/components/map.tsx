import { type CSSProperties } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapContext } from "../context/MapContext.tsx";
import { Location } from "./SVG.tsx";
import L from "leaflet";

const marker = new L.Icon({
  iconUrl: <Location />,
  iconRetinaUrl: <Location />,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

type MyComponentProps = {
  lat: number;
  lng: number;
};

const mapStyles: CSSProperties = {
  height: "100vh",
  width: "100%",
  zIndex: "0",
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
    zoomControl: false,
  };

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
