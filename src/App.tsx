import { MapProvider } from "./context/MapContext.tsx";
import "./App.css";
import Map from "./components/map.tsx";
import ImageHeader from "./components/ImageHeader.tsx";

function App() {
  return (
    <>
      <MapProvider>
        <ImageHeader />
        <Map />
      </MapProvider>
    </>
  );
}

export default App;
