import { useEffect, useState } from "react";
import axios from "axios";
export const SignupForm = (props) => {
  //creating IP state
  const [ip, setIp] = useState("");
  //creating function to load ip address from the API
  const getip = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data.IPv4);
    setIp(res.data.IPv4);
    console.log(setIp);
  };
  useEffect(() => {
    getip();
  }, []);

  return (
    <div>
      <p>Your IP Address is: {ip}</p>
    </div>
  );
};
