import React from 'react';
import StatusBar from "./StatusBar";
import MapRender from "./Map";
import PSI from "./PSI";
import VerticalSlider from "./Slider";
import TemperatureSlider from "./Temperature";
import Spotify from "./Spotify";
import "./Infotainment.css";

function Infotainment() {
  return (
    <React.Fragment>
      <StatusBar />
      <div className="app-container"> 
        <div className="filler-wrap"> 
          <MapRender />
          <PSI />
        </div>      
        <TemperatureSlider />
        <Spotify />
        <div className="vslider-wrap">
          <VerticalSlider />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Infotainment;