import { createContext, useContext } from "react";

type MapContext = {
  latitude: number;
  longitude: number;
};

const MapInfoContext = createContext({} as MapContext);

export function useMapContext() {
  return useContext(MapInfoContext);
}

export function MapProvider({ children }) {
  return (
    <MapInfoContext.Provider value={{}}>{children}</MapInfoContext.Provider>
  );
}
