import { useState, useRef, useEffect } from "react";
import NetworkInfo from "./NetworkInfo.tsx";
import Axios from "axios";
import { FaAngleRight } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";
import { useMapContext } from "../context/MapContext.tsx";

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
  const { setLat, setLng } = useMapContext();

  const [track, setTrack] = useState<string>(""),
    [internetData, setInternetData] = useState<GeoData | null>(null),
    [urlString, setUrlString] = useState<string>(``);

  const apiKeyValue = import.meta.env.VITE_API_KEY as string,
    ipv4Regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/,
    domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;

  const inputRef = useRef<HTMLInputElement>(null),
    buttonRef = useRef<HTMLButtonElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrack(event.target.value);
  };

  function domainCheck(domain: URLSearchParams, apiKey: URLSearchParams) {
    console.log("Check domain");
    domain.append("domain", track);
    setUrlString(
      `https://geo.ipify.org/api/v2/country,city?${apiKey}&${domain}`,
    );
  }

  function ipCheck(ipAddress: URLSearchParams, apiKey: URLSearchParams) {
    console.log("Check IP");
    ipAddress.append("ipAddress", track);
    setUrlString(
      `https://geo.ipify.org/api/v2/country,city?${apiKey}&${ipAddress}`,
    );
  }

  function setData() {
    const apiKey = new URLSearchParams(),
      ipAddress = new URLSearchParams(),
      domain = new URLSearchParams();

    apiKey.append("apiKey", apiKeyValue);

    if (domainRegex.test(track)) domainCheck(domain, apiKey);

    if (ipv4Regex.test(track)) ipCheck(ipAddress, apiKey);
  }

  useEffect(() => {
    inputRef.current?.focus();

    async function getGeoData() {
      try {
        await Axios.get(urlString)
          .then((res) => {
            if (res.data) {
              setInternetData(res.data);
              setLat(res.data.location.lat);
              setLng(res.data.location.lng);
              return;
            }
          })
          .catch((err) => {
            if (err) {
              console.error(
                `Error fetching data from the server. ${err.message}.`,
              );
            }
          })
          .finally(() => {
            setTrack("");
          });
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error fetching data: ${error.message}`);
        }
      }
    }

    function defaultData() {
      Axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKeyValue}`,
      )
        .then((res) => {
          console.log(res.data);
          setInternetData(res.data);
          setLat(res.data.location.lat);
          setLng(res.data.location.lng);
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
    defaultData();

    if (urlString.length) getGeoData();

    inputRef.current?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        buttonRef.current?.click();
      }
    });
  }, [apiKeyValue, setLat, setLng, urlString]);

  return (
    <>
      <div className={"flex justify-center control-container"}>
        <Input
          type="text"
          id={"track"}
          name={"track"}
          value={track}
          onChange={handleChange}
          ref={inputRef}
          placeholder={"Search for any IP address or domain name"}
          className={
            "rounded-l-2xl bg-white px-5 py-4 focus:outline-0 w-full sm:w-3/4 lg:w-1/3"
          }
        />

        <Button
          onClick={setData}
          ref={buttonRef}
          className={"text-white p-4 px-5 rounded-r-2xl ip-check-btn"}
        >
          <FaAngleRight />
        </Button>
      </div>

      <NetworkInfo
        ip={internetData?.ip}
        region={internetData?.location?.region}
        timezone={internetData?.location?.timezone}
        isp={internetData?.isp}
      />
    </>
  );
}
