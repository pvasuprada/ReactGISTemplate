import React, { useEffect } from "react";
import { loadModules } from "esri-loader";
import "./App.css";
const MapComponent = () => {
  useEffect(() => {
    // this will lazy load the ArcGIS API
    // and then use Dojo's loader to require the classes
    loadModules(["esri/views/MapView", "esri/WebMap"])
      .then(([MapView, WebMap]) => {
        // then we load a web map from an id
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "f2e9b762544945f390ca4ac3671cfa72",
          },
        });
        // and we show that map in a container w/ id #viewDiv
        const view = new MapView({
          map: webmap,
          container: "viewDiv",
        });
      })
      .catch((err) => {
        // handle any errors
        console.error(err);
      });
  }, []);
  return <div id="viewDiv"></div>;
};

export default MapComponent;
