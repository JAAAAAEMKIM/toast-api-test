import React, { createElement, useEffect } from "react";

const APP_KEY = "CAN1F8XAel05jrm8";

const initMap = () => {
  if (window.inavi) {
    var map = new window.inavi.maps.Map({
      container: "toast-map",
      center: {
        lng: 127.11,
        lat: 37.4,
      },
      zoom: 12,
      type: "NORMAL",
    });
    console.log(map);
  }
};

const ToastMap = () => {
  useEffect(() => {
    if (!window.inavi) {
      window.initMap = initMap;
      const sdk = document.createElement("script");
      const src = `https://api-maps.cloud.toast.com/maps/v3.0/appkeys/${APP_KEY}/maps?callback=initMap`;
      sdk.src = src;
      console.log("SCRIPT", sdk);
      document.body.append(sdk);
    }
  }, []);

  return (
    <div
      className="map-wrapper"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="toast-map" style={{ height: "80vh", width: "80vw" }}></div>
    </div>
  );
};

export default ToastMap;
