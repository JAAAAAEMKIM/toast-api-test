import React, { useEffect } from "react";

const APP_KEY = "CAN1F8XAel05jrm8";

const coordinates = {
  CITYHALL: {
    title: "성남시청",
    coordinates: [127.126838, 37.419667],
    zoom: 16,
  },
  PANGYO: {
    title: "판교역",
    coordinates: [127.111104, 37.394657],
    zoom: 16,
  },
};

const initMap = () => {
  if (window.inavi) {
    const map = new window.inavi.maps.Map({
      container: "toast-map",
      center: {
        lng: 127.11,
        lat: 37.4,
      },
      zoom: 12,
      type: "NORMAL",
    });
    console.log(map);
    window.toastmap = map;
  }
};

const ToastMap = () => {
  useEffect(() => {
    if (!window.inavi) {
      window.initMap = initMap;
      const sdk = document.createElement("script");
      const src = `https://api-maps.cloud.toast.com/maps/v3.0/appkeys/${APP_KEY}/maps?callback=initMap`;
      sdk.src = src;
      document.body.append(sdk);
    }
  }, []);

  const onClickNormal = () => {
    if (window.inavi && window.toastmap) {
      window.toastmap.setType("NORMAL");
    }
  };
  const onClickAir = () => {
    if (window.inavi && window.toastmap) {
      console.log("TOASTMAP", window.toastmap);
      window.toastmap.setType("SATELLITE");
    }
  };
  const onClickCityHall = () => {
    if (window.inavi && window.toastmap) {
      window.toastmap.flyTo(coordinates.CITYHALL.coordinates, {
        zoom: coordinates.CITYHALL.zoom,
      });
    }
  };
  const onClickPangyo = () => {
    if (window.inavi && window.toastmap) {
      window.toastmap.flyTo(coordinates.PANGYO.coordinates, {
        zoom: coordinates.PANGYO.zoom,
      });
    }
  };
  const onClickTilt = () => {
    if (window.inavi && window.toastmap) {
      window.toastmap.setTilt(60, { duration: 200 });
    }
  };

  return (
    <div className="toast">
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
      <div
        className="map-control"
        style={{
          // height: "20vh",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          margin: "20px 0",
        }}
      >
        <input />
        <button onClick={onClickNormal}>일반 뷰</button>
        <button onClick={onClickAir}>항공 뷰</button>
        <button onClick={onClickCityHall}>성남시청</button>
        <button onClick={onClickPangyo}>판교역</button>
        <button onClick={onClickTilt}>기울이기</button>
      </div>
    </div>
  );
};

export default ToastMap;
