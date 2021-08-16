import "./Infotainment.css";
import {
  FaCloud,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Infotainment = () => {
  useEffect(() => {
    document.querySelector(".clim").addEventListener("click", () => {
      document.querySelector(".clim-hold").classList.toggle("show");
    });

    document.querySelector("#fan").addEventListener("click", () => {
      document.querySelector(".fan-hold").classList.toggle("show");
    });
  });

  const [fanBars, setBars] = useState(1);

  return (
    <div className="contain-info">
      <div className="infot">
        <nav className="info-nav">
          <img src="/assets/logo.png" id="nav-logo" alt="logo" />
          <p>
            <FaCloud />
            &nbsp; 24<sup>o</sup>C
          </p>
          <h2>11:42</h2>
          <div className="call">
            <img src="/assets/decline.svg" alt="logo" />
            <img src="/assets/accept.svg" alt="logo" />
          </div>
        </nav>

        <div className="main-info">
          <div className="main-top">
            <img src="/assets/map.svg" alt="map" className="map" />
            <img src="/assets/tyre.svg" alt="tyre" className="tyre" />
          </div>
          <div className="temp">
            <div className="clim">
              <span>24</span>
              <sup>o</sup>
            </div>
            <div className="clim-hold">
              <input
                className="temp-slide"
                type="range"
                min="16"
                max="32"
                onChange={(e) => temp(e)}
              />
            </div>
            <div className="fan-hold">
              <FaChevronLeft onClick={decrease} />
              <div className="fan-levs">
                <div className={fanBars >= 1 ? "lev lev-active" : "lev"}></div>
                <div className={fanBars >= 2 ? "lev lev-active" : "lev"}></div>
                <div className={fanBars >= 3 ? "lev lev-active" : "lev"}></div>
                <div className={fanBars >= 4 ? "lev lev-active" : "lev"}></div>
                <div className={fanBars === 5 ? "lev lev-active" : "lev"}></div>
              </div>
              <FaChevronRight onClick={increase} />
            </div>
            <div className="temp-set">
              <img src="/assets/seat.svg" alt="seat" />
              <img src="/assets/back-win.svg" alt="seat" />
              <img
                style={{ cursor: "pointer" }}
                src="/assets/fan.svg"
                alt="seat"
                id="fan"
              />
              <img src="/assets/front-win.svg" alt="seat" />
              <img src="/assets/seat.svg" alt="seat" />
            </div>
          </div>
          <div className="music">
            <div className="track">
              <div className="track-info">
                <img src="/assets/art.jpeg" alt="the" />
                <h3>Slow Dancing in Burning Room - John Mayer</h3>
              </div>
              <div className="controls">
                <FaStepBackward />
                <FaPause />
                <FaStepForward />
              </div>
            </div>
            <img src="/assets/music.svg" alt="music e" />
          </div>
        </div>
      </div>
    </div>
  );

  function temp(e) {
    document.querySelector(".clim span").innerHTML = e.target.value;
  }

  function increase() {
    if (fanBars < 5) setBars(fanBars + 1);
  }

  function decrease() {
    if (fanBars !== 0) setBars(fanBars - 1);
  }
};

export default Infotainment;
