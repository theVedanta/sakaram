import React from 'react';
import StatusBar from "./StatusBar";
import MapRender from "./Map";
import PSI from "./PSI";
import VerticalSlider from "./Slider";
import TemperatureSlider from "./Temperature";
import "./Infotainment.css";

function App() {
  return (
    <React.Fragment>
      <StatusBar />
      <div className="app-container"> 
      <div className="filler-wrap"> 
        <MapRender />
        <PSI />
      </div>      
        <TemperatureSlider />
        {/* <VerticalSlider /> */}
      </div>
    </React.Fragment>
  );
}

export default App;