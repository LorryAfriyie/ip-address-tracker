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
    country: string;
    region: string;
    timezone: string;
  };
};

export default function IPTracker() {
  const [track, setTrack] = useState<string>("");
  const [internetData, setInternetData] = useState<GeoData | null>(null);
  const [urlString, setUrlString] = useState<string>(``);

  const apiKeyValue = import.meta.env.VITE_API_KEY as string;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrack(event.target.value);
  };

  function domainCheck(domain: URLSearchParams, apiKey: URLSearchParams) {
    const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;

    if (domainRegex.test(track)) {
      console.log("Check domain");
      domain.append("domain", track);
      setUrlString(
        `https://geo.ipify.org/api/v2/country,city?${apiKey}&${domain}`,
      );
    }
  }

  function ipCheck(ipAddress: URLSearchParams, apiKey: URLSearchParams) {
    const ipv4Regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;

    if (ipv4Regex.test(track)) {
      console.log("Check IP");
      ipAddress.append("ipAddress", track);
      setUrlString(
        `https://geo.ipify.org/api/v2/country,city?${apiKey}&${ipAddress}`,
      );
    }
  }

  function setData() {
    const apiKey = new URLSearchParams(),
      ipAddress = new URLSearchParams(),
      domain = new URLSearchParams();

    apiKey.append("apiKey", apiKeyValue);

    domainCheck(domain, apiKey);

    ipCheck(ipAddress, apiKey);
  }

  useEffect(() => {
    inputRef.current?.focus();

    async function getGeoData() {
      try {
        await Axios.post(urlString)
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              setInternetData(res.data);
              return;
            }

            if (res.status === 400) {
              console.log("400 error");
              console.log(res.data.message);
              return;
            }

            if (res.status === 500) {
              console.log("500 error");
              console.log(res.data.message);
              return;
            }
          })
          .catch((err) => {
            if (err) {
              console.error(err);
              console.log(err);
            }
          })
          .finally(() => {
            setTrack("");
          });

        /*const response = await fetch(urlString, {
          mode: "cors",
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setInternetData(jsonData);
        setTrack("");
        console.log(jsonData);*/
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error fetching data: ${error.message}`);
          console.log(error.message);
        } else {
          console.error(error);
          console.log("breaking here");
        }
      }
    }

    if (urlString.length) getGeoData();
  }, [urlString]);

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
