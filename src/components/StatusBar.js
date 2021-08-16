// import { Link } from "react-router-dom";
import {FaCloudShowersHeavy} from 'react-icons/fa'
import {AiFillClockCircle} from 'react-icons/ai'

import "./StatusBar.css";

function StatusBar() {
  return (
    <nav className="status container">
      <div className="status-wrap">
          <img src="assets/logo.png" className="status logo"/>
          <div className="status temp">
            <FaCloudShowersHeavy />
            <span className="text">24°C</span>
          </div>
          <div className="status time">
            <AiFillClockCircle />
            <span className="text">11:42PM</span>            
          </div>
          <div className="status perc">
            <img src="assets/perc.png"/>
          </div>
      </div>
    </nav>
  );
}

export default StatusBar;