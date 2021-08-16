import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    height: "20vh",
    width: "2vw",
  },
});

const VSlider = withStyles({
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
    height: 24,
    width: "10px !important",
    borderRadius: 24,
    opacity: 1,
  },
})(Slider);

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
        <VSlider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={10}
          aria-labelledby="vertical-slider"
          valueLabelDisplay="auto"
        />
      </div>
    </React.Fragment>
  );
}

export default VerticalSlider;
