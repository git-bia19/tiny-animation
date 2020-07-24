import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import useWebAnimations, { slideInDown } from "@wellyshen/use-web-animations";
import "../App.css"

const Main = () => {
  const { timing } = slideInDown;
  const { ref } = useWebAnimations({
    keyframes: {
      transform: "rotate(180deg)",
    },
    timing: {
      ...timing,
      delay: 500,
      direction: "alternate",
      iterations: Infinity,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    },
  });

  return (
    <Grid container>
      <Grid item sm={6} xs={12}>
      
        <Typography variant="h1" className="textColor">
          SILVER
        </Typography>
        <Typography variant="h2" className="textColor">
          LINING
        </Typography>
        <Typography
          variant="h5"
          className="textColor"
          style={{ marginTop: "30px" }}
        >
          Add silver lining to your web design and animations so that you may celebrate your work.
        </Typography>

        <Button
          style={{
            color: "white",
            background: "gray",
            borderRadius: "40px",
            padding: "15px",
            marginTop: "40px",
            fontSize: "16px",
            textTransform: "initial",
          }}
        >
          Send a message
        </Button>
      </Grid>
      <Grid item sm={6} xs={12}>
     
        <img
          src={require("../images/hexagon.png")}
          className="target"
          style={{ marginTop: "-50px" }}
          ref={ref}
          alt=""
          width ="600"
          height ="600"
          class = "hex"
        />
      
      </Grid>
    </Grid>
  );
};

export default Main;
