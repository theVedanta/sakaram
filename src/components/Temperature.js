import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./Temperature.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 4,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

// const marks = [
//   {
//     value: 0,
//     label: '0°C',
//   },
//   {
//     value: 20,
//     label: '20°C',
//   },
//   {
//     value: 37,
//     label: '37°C',
//   },
//   {
//     value: 100,
//     label: '100°C',
//   },
// ];

function valuetext(value) {
  return `${value}°C`;
}

const CustomisedSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    // border: "4px solid currentColor",
    marginTop: -5,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  track: {
    height: 8,
    borderRadius: "3vh",
  },
  rail: {
    height: 10,
    borderRadius: "3vh",
    opacity: 1,
  },
})(Slider);

// function Temperature() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//         <div className="temp-container">
//             <div className="slider-container">
//                 <div className="tslider-wrap">
//                     <Typography id="discrete-slider-custom" gutterBottom>
//                     <h2>26C</h2>
//                     </Typography>
//                     <CustomisedSlider
//                         defaultValue={20}
//                         getAriaValueText={valuetext}
//                         aria-labelledby="discrete-slider-custom"
//                         // valueLabelDisplay="auto"
//                     />
//                 </div>
//                 <div className="tslider-wrap">
//                     <Typography id="discrete-slider-custom" gutterBottom>
//                     <h2>26C</h2>
//                     </Typography>
//                     <CustomisedSlider
//                         defaultValue={20}
//                         getAriaValueText={valuetext}
//                         aria-labelledby="discrete-slider-custom"
//                         // valueLabelDisplay="auto"
//                     />
//                 </div>
//             </div>
//             <div className="control-wrap">
//                 <div className="temp-controls">
//                     <img src="assets/t1.png" />
//                     <img src="assets/t2.png" />
//                     <img src="assets/t3.png" />
//                     <img src="assets/t4.png" />
//                     <img src="assets/t5.png" />
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
//   }

function Temperature() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="temp-container">
        <div className="slider-container">
          <div className="tslider-wrap">
            <Typography id="discrete-slider-custom" gutterBottom>
              <h2>26C</h2>
            </Typography>
            <CustomisedSlider
              defaultValue={20}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              valueLabelDisplay="auto"
            />
          </div>
          <div className="tslider-wrap">
            <Typography id="discrete-slider-custom" gutterBottom>
              <h2>26C</h2>
            </Typography>
            <CustomisedSlider
              defaultValue={20}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <div className="temp-controls">
          <img alt="alt" src="assets/t1.png" />
          <img alt="alt" src="assets/t2.png" />
          <img alt="alt" src="assets/t3.png" />
          <img alt="alt" src="assets/t4.png" />
          <img alt="alt" src="assets/t5.png" />
        </div>
      </div>
    </div>
  );
}
export default Temperature;
