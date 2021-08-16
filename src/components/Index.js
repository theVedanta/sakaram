import "../Index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="index-container">
        <nav>
          <img src="/assets/logo.svg" alt="" className="logo" />
          <h1>Sakaram</h1>
          <h1></h1>
        </nav>

        <section className="hero">
          <img src="/assets/car.png" alt="the" />
        </section>
      </div>
      {/* <video src=""></video> */}
      <div className="index-container">
        <div className="content">
          <img src="/assets/engine.jpeg" alt="the" />
          <div className="write">
            <h2>RSS Razor Engine</h2>
            <p>
              Being equipped with the worlds fastest and the strongest engine.
              The Sakaram can go upto 690 km/hr in just 42 seconds
            </p>
          </div>
        </div>
        <div className="content">
          <div className="write">
            <h2>RSS Infores</h2>
            <p>
              This year we are proud to introduce our latest infotainment
              software for the Sakaram, the RSS Infores. Demo&nbsp;
              <Link to="/infotainment">here!</Link>
            </p>
          </div>
          <img src="/assets/disp.jpg" alt="the" />
        </div>
        <div className="content">
          <img src="/assets/guage.png" alt="the" />
          <div className="write">
            <h2>RSS Guage Cluster</h2>
            <p>
              Check out the Guage Cluster <Link to="/guages">here!</Link>
            </p>
          </div>
        </div>
      </div>

      <footer>
        <div className="index-container">
          <img src="/assets/logo.svg" alt="the" />
          <div className="dets">
            <div className="address">RSS Motors, Hiranandani, Mumbai</div>
            <div className="phone">+91 6942694269</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
