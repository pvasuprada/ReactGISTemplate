import React, { useEffect } from "react";
import MapComponent from "./MapComponent";
import { setDefaultOptions } from "esri-loader";
setDefaultOptions({ version: "4.24" });

const App = () => {
  return (
    <div>
      <MapComponent />
    </div>
  );
};

export default App;
