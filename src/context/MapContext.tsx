import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from "react";

type MapContext = {
  lat: number;
  lng: number;
  setLat: Dispatch<SetStateAction<number>>;
  setLng: Dispatch<SetStateAction<number>>;
};

type MapNode = {
  children: ReactNode;
};

const MapInfoContext = createContext({} as MapContext);

export function useMapContext() {
  return useContext(MapInfoContext);
}

export function MapProvider({ children }: MapNode) {
  const [lat, setLat] = useState<number>(0),
    [lng, setLng] = useState<number>(0);

  return (
    <MapInfoContext.Provider value={{ lat, setLat, lng, setLng }}>
      {children}
    </MapInfoContext.Provider>
  );
}
