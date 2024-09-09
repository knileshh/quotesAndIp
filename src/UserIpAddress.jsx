import React, { useState, useEffect } from "react";
import axios from "axios";

const UserIPAddress = () => {
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    // Fetch the IP address from the ipify API
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error("Error fetching the IP address:", error);
      }
    };

    fetchIPAddress();
  }, []); // Empty dependency array means this runs once after the component mounts

  return (
    <>
      {/* The IP Address bar */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 text-red-600 rounded-lg h-8 w-1/2 flex items-center justify-center m-2 z-50">
        <div className="text-center">
          <h1 className="text-sm font-semibold">
            Your IP Address: {ipAddress ? ipAddress : "Loading..."}
          </h1>
        </div>
      </div>

      {/* This div creates space equal to the height of the fixed bar */}
      <div className="h-12"></div>
    </>
  );
};

export default UserIPAddress;
