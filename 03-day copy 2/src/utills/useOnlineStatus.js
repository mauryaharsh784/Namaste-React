import { useEffect, useState } from "react";

const useOnlineStatus = () => {

  const [useOnlineStatus, setOnlineStatus] = useState(navigator.onLine);

  //check if online

  useEffect(() => {

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

  }, []);

  // boolen value

  return useOnlineStatus;
};

export default useOnlineStatus;