import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapContext } from "../context/MapContext.tsx";

type MyComponentProps = {
  lat: number;
  lng: number;
};

function MyComponent({ lat, lng }: MyComponentProps) {
  const map = useMap();
  map.setView([lat, lng]);
  console.log("map center:", map.getCenter().lat);
  return null;
}

export default function Map() {
  const { lat, lng } = useMapContext();

  const mapRef = useRef(null);
  const latitude = 51.505;
  const longitude = -0.09;

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
        <MyComponent lat={lat} lng={lng} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </>
  );
}
