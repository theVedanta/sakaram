import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    height: "20vh",
    width: "2vw",
  },
});

function valuetext(value) {
  return `${value}`;
}

// const marks = [
//   {
//     value: 0,
//     label: '0',
//   },
//   {
//     value: 20,
//     label: '20',
//   },
//   {
//     value: 40,
//     label: '40',
//   },
//   {
//     value: 60,
//     label: '60',
//   },
//   {
//     value: 80,
//     label: '80'
//   },
// ];

function VerticalSlider() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
        {/* Temperature */}
      </Typography>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={10}
          aria-labelledby="vertical-slider"
          valueLabelDisplay="auto"
        />
        {/* <Slider
          disabled
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          aria-labelledby="vertical-slider"
        />
        <Slider
          orientation="vertical"
          defaultValue={[20, 37]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        /> */}
      </div>
    </React.Fragment>
  );
}

export default VerticalSlider;
