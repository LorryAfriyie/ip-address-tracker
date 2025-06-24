import "./App.css";
import { useEffect } from "react";

interface GeoData {
  ip: string;
  isp: string;
  location: {
    region: string;
    timezone: string;
  };
}

function App() {
  useEffect(() => {
    fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_zJZXkPGIULduoxqxO9uqyPWe0CnAF&ipAddress=8.8.8.8"
    )
      .then((res) => res.json())
      .then((data:GeoData) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return <></>;
}

export default App;
