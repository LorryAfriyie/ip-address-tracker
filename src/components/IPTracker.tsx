import { useState, useRef, useEffect } from "react";
import NetworkInfo from "./NetworkInfo.tsx";
import Axios from "axios";
import Button from "./Button";
import Input from "./Input";

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
    city: string;
    country: string;
    geomaneId: number;
    lat: number;
    lng: number;
    postalCode: number;
    region: string;
    timezone: string;
  };
};

export default function IPTracker() {
  const [track, setTrack] = useState<string>(""),
    [internetData, setInternetData] = useState<GeoData | null>(null),
    [urlString, setUrlString] = useState<string>(``);

  const apiKeyValue = import.meta.env.VITE_API_KEY as string,
    ipv4Regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/,
    domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrack(event.target.value);
  };

  function domainCheck(domain: URLSearchParams, apiKey: URLSearchParams) {
    console.log("Check domain");
    domain.append("domain", track);
    setUrlString(
      `https://geo.ipify.org/api/v2/country,city?${apiKey}&${domain}`,
    );

    getGeoData();
  }

  function ipCheck(ipAddress: URLSearchParams, apiKey: URLSearchParams) {
    console.log("Check IP");
    ipAddress.append("ipAddress", track);
    setUrlString(
      `https://geo.ipify.org/api/v2/country,city?${apiKey}&${ipAddress}`,
    );

    getGeoData();
  }

  function setData() {
    const apiKey = new URLSearchParams(),
      ipAddress = new URLSearchParams(),
      domain = new URLSearchParams();

    apiKey.append("apiKey", apiKeyValue);

    if (domainRegex.test(track)) domainCheck(domain, apiKey);

    if (ipv4Regex.test(track)) ipCheck(ipAddress, apiKey);
  }

  async function getGeoData() {
    console.log("working");
    try {
      await Axios.get(urlString)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            setInternetData(res.data);
            return;
          }
        })
        .catch((err) => {
          if (err) {
            console.error(err.message);
          }
        })
        .finally(() => {
          setTrack("");
        });
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error fetching data: ${error.message}`);
        console.log(error.message);
      }
    }
  }

  function defaultData() {
    Axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKeyValue}&ipAddress=8.8.8.8`,
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  useEffect(() => {
    inputRef.current?.focus();

    defaultData();
  }, []);

  return (
    <>
      <div className={"mb-5 flex"}>
        <Input
          type="text"
          id={"track"}
          name={"track"}
          value={track}
          onChange={handleChange}
          ref={inputRef}
          placeholder={"Enter IP address or domain name"}
          className={"rounded-l-xl bg-white px-5 focus:outline-0 w-100"}
        />

        <Button
          onClick={setData}
          className={"text-white p-3 rounded-r-xl ip-check-btn"}
        >
          Get IP Data
        </Button>
      </div>

      <NetworkInfo
        ip={internetData?.ip}
        region={internetData?.location.region}
        timezone={internetData?.location.timezone}
        isp={internetData?.isp}
      />
    </>
  );
}
