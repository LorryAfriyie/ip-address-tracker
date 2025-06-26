import "./App.css";
import { useState, useRef, useEffect } from "react";

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
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams(),
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrack(event.target.value);
  };

  async function getGeoData() {
    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/,
      ipv4Regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;

    const apiKey = new URLSearchParams(),
      ipAddress = new URLSearchParams(),
      domain = new URLSearchParams();

    if (domainRegex.test(track)) {
      domain.append("domain", track);
      setSearchParams(new URLSearchParams({ domain: track }));
      console.log(domain);
    }

    if (ipv4Regex.test(track)) {
      ipAddress.append("ipAddress", track);
      setSearchParams(new URLSearchParams({ ipAddress: track }));
      console.log(ipAddress);
    }

    apiKey.append("apiKey", "at_zJZXkPGIULduoxqxO9uqyPWe0CnAF");
    console.log(domain);
    const url: string = `https://geo.ipify.org/api/v2/country?${apiKey}&${domain}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();
      setInternetData(jsonData);
      console.log(jsonData);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error fetching data: ${error.message}`);
      } else {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

      <button onClick={getGeoData}>Get Data</button>

      {internetData && <p>{internetData.ip}</p>}
    </>
  );
}

export default App;
