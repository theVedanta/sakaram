import React, { useEffect, useState } from "react";
import {FaCloudShowersHeavy} from 'react-icons/fa'
import {AiFillClockCircle} from 'react-icons/ai'

import "./StatusBar.css";

let api = `https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=976d88e8699f349aa3435ae965b66663`

function StatusBar() {

  useEffect(() => {
    fetchFaqs();
  }, []);

  let [faqs, setFaqs] = useState([]);

  async function fetchFaqs() {
    const data = await fetch(api);
    const faqs = await data.json();
    setFaqs(faqs.faqs);
  }

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