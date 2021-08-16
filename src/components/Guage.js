import "./guage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Guage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      delay: 200,
    });
    AOS.refresh();
    document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
  }, []);

  let changeTime;
  let speedArr = [];
  let speed = 0;
  let brakeInt;
  let audio = new Audio("/assets/the.mp3");

  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp") {
      audio.volume = 0.2;
      audio.play();

      clearTimeout(changeTime);
      clearInterval(brakeInt);

      // for (let needle of document.querySelectorAll(".needle-hold")) {
      //   needle.style.transform = "translate(-50%, -50%) rotate(220deg)";
      // }

      document.querySelector(".needle-hold").style.transform =
        "translate(-50%, -50%) rotate(220deg)";

      document.querySelector("#rpm-needle").style.animation = "rpm 6s forwards";

      document.querySelector("#gear-display").innerHTML = "1";

      document.querySelector(".gear-active").classList.remove("gear-active");
      document.querySelector("#drive").classList.add("gear-active");

      if (speedArr.length < 60) {
        speedArr.push(e.code);
      }

      setInterval(() => {
        if (speed < speedArr.length * 6) {
          speed++;
          document.querySelector(".speed").textContent = speed;
        }

        if (speed > 60) {
          document.querySelector("#gear-display").innerHTML = "2";
        }
        if (speed > 100) {
          document.querySelector("#gear-display").innerHTML = "3";
        }
        if (speed > 160) {
          document.querySelector("#gear-display").innerHTML = "4";
        }
        if (speed > 200) {
          document.querySelector("#gear-display").innerHTML = "5";
        }
        if (speed > 270) {
          document.querySelector("#gear-display").innerHTML = "6";
        }
      }, 100);
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowUp") {
      let fadeout = setInterval(() => {
        if (audio.volume > 0) {
          audio.volume -= 0.1;
        } else {
          clearInterval(fadeout);
          audio.pause();
          audio.currentTime = 0;
        }
      }, 100);

      document.querySelector(".needle-hold").style.transform =
        "translate(-50%, -50%) rotate(-40deg)";

      document.querySelector("#rpm-needle").style.transform =
        "translate(-50%, -50%) rotate(-40deg)";
      document.querySelector("#rpm-needle").style.animation =
        "return 1s forwards";

      changeTime = setTimeout(() => {
        document.querySelector(".gear-active").classList.remove("gear-active");
        document.querySelector("#park").classList.add("gear-active");
      }, 1000);

      brakeInt = setInterval(() => {
        speedArr.pop();
        if (speed > speedArr.length * 6) {
          speed--;
          document.querySelector(".speed").textContent = speed;
        }

        if (speed < 60) {
          document.querySelector("#gear-display").innerHTML = "N";
        } else if (speed < 100) {
          document.querySelector("#gear-display").innerHTML = "1";
        } else if (speed < 160) {
          document.querySelector("#gear-display").innerHTML = "2";
        } else if (speed < 200) {
          document.querySelector("#gear-display").innerHTML = "3";
        }
      }, 12);
    }
  });

  return (
    <>
      <div className="guage-container">
        <div className="cluster">
          <img
            data-aos="fade"
            src="/assets/outer.svg"
            alt="the"
            className="outer"
          />
          <div data-aos="zoom-in" data-aos-delay="1000" className="left-guage">
            <img src="/assets/dial.svg" className="dial" alt="the" />

            <img
              src="/assets/inner-dial.svg"
              className="inner"
              alt="hey"
              id="actual-inner"
            />
            <img
              src="/assets/inner-dial-cover.svg"
              className="inner"
              alt="hey"
            />

            <div className="needle-hold">
              <img src="/assets/needle.svg" alt="" className="needle" />
            </div>

            <h1 className="speed">0</h1>
            <h2 className="speed-unit">Km/Hr</h2>

            <div className="gear-box">
              <h3 className="gear gear-active" id="park">
                P
              </h3>
              <h3 className="gear" id="drive">
                D
              </h3>
              <h3 className="gear" id="reverse">
                R
              </h3>
            </div>
          </div>
          <div className="controls"></div>
          <div data-aos="zoom-in" data-aos-delay="1000" className="right-guage">
            <img src="/assets/rpm-dial.svg" className="dial" alt="the" />
            <img
              src="/assets/inner-dial.svg"
              className="inner"
              alt="hey"
              id="actual-inner"
            />
            <img
              src="/assets/inner-dial-cover.svg"
              className="inner rpm-inner"
              alt="hey"
            />
            <div className="needle-hold" id="rpm-needle">
              <img src="/assets/needle.svg" alt="" className="needle" />
            </div>
            <h1 id="gear-display">N</h1>
            <h2 id="gear-display-text">RPM</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guage;
