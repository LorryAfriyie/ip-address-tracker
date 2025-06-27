import "./App.css";
import { useState, useRef, useEffect } from "react";
import Map from "./components/map.tsx";

type GeoData = {
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  ip: string;
  isp: string;
  location: {
    country: string;
    region: string;
    timezone: string;
  };
};

function App() {
  const [track, setTrack] = useState<string>("");
  const [internetData, setInternetData] = useState<GeoData | null>(null);
  const [urlString, setUrlString] = useState<string>(``);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrack(event.target.value);
  };

  function setData() {
    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/,
      ipv4Regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;

    const apiKey = new URLSearchParams(),
      ipAddress = new URLSearchParams(),
      domain = new URLSearchParams();

    apiKey.append("apiKey", import.meta.env.VITE_API_KEY);

    if (domainRegex.test(track)) {
      domain.append("domain", track);
      setUrlString(`https://geo.ipify.org/api/v2/country?${apiKey}&${domain}`);
    }

    if (ipv4Regex.test(track)) {
      ipAddress.append("ipAddress", track);
      setUrlString(
        `https://geo.ipify.org/api/v2/country?${apiKey}&${ipAddress}`,
      );
    }
  }

  useEffect(() => {
    inputRef.current?.focus();

    async function getGeoData() {
      try {
        const response = await fetch(urlString);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setInternetData(jsonData);
        setTrack("");
        console.log(jsonData);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error fetching data: ${error.message}`);
          console.log(error.message);
        } else {
          console.error(error);
        }
      }
    }

    if (urlString.length) getGeoData();
  }, [urlString]);

  return (
    <>
      <input
        type="text"
        id={"track"}
        name={"track"}
        value={track}
        onChange={handleChange}
        ref={inputRef}
        placeholder={"Enter IP address or domain name"}
      />
      <br />

      <button onClick={setData}>Get Data</button>

      {internetData && (
        <>
          <p>{internetData.ip}</p>
          <p>{internetData.location.region}</p>
          <p>{internetData.location.timezone}</p>
          <p>{internetData.isp}</p>
        </>
      )}

      <Map />
    </>
  );
}

export default App;
