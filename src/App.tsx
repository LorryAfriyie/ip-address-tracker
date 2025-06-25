import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getGeoData() {
      const apiKey = new URLSearchParams(),
        ipAddress = new URLSearchParams();
      apiKey.append("apiKey", "at_zJZXkPGIULduoxqxO9uqyPWe0CnAF");
      ipAddress.append("ipAddress", "8.8.8.8");

      const url: string = `https://geo.ipify.org/api/v2/country?${apiKey}&${ipAddress}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log(jsonData);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error fetching data: ${error.message}`);
        } else {
          console.error(error);
        }
      }
    }

    getGeoData();
  }, []);
  return <></>;
}

export default App;
