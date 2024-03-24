import React, { useEffect } from "react";
import MapComponent from "./MapComponent";
import { setDefaultOptions } from "esri-loader";
import Header from "./Header";
setDefaultOptions({ version: "4.24" });

const App = () => {
  return (
    <div>
      <Header />
      <MapComponent />
    </div>
  );
};

export default App;
