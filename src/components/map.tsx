import { useEffect } from "react";
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
  return null;
}

export default function Map() {
  const { lat, lng } = useMapContext();

  useEffect(() => {
    console.log(lat);
    console.log(lng);
  }, [lat, lng]);

  return (
    <>
      <MapContainer
        center={{ lat: 0, lng: 0 }}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <MyComponent lat={lat} lng={lng} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]} />
      </MapContainer>
    </>
  );
}
