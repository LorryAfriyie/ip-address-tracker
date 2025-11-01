import { useEffect, useState } from "react";

const useInternetCheck = () => {
  const [online, setOnline] = useState<boolean>(true);

  function networkStatus() {
    setOnline(navigator.onLine);
  }

  useEffect(() => {
    networkStatus();
  }, []);

  useEffect(() => {
    window.addEventListener("online", networkStatus);
    window.addEventListener("offline", networkStatus);

    return () => {
      window.removeEventListener("online", networkStatus);
      window.removeEventListener("offline", networkStatus);
    };
  }, []);

  return { online };
};

export default useInternetCheck;
