import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";

const Content = () => {
  const { keyframes, timing } = pulse;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      direction: "alternate",
      iterations: Infinity,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    },
  });

  const liItems = [
    "3D animations",
    "Layout",
    "Chatbots",
    "User Research",
    "User Testing",
    "Design Principles",
    "Prototype",
  ];

  return (
    <Grid container style={{ marginTop: "80px" }}>
      <Grid item sm={6} xs={12}>
        <img
          src={require( "../images/web-design.png")}
          className="target"          
          ref={ref}
          alt=""
          width= "600"
          height ="500"
        />
      </Grid>
      <Grid item sm={1} />
      <Grid item sm={5} xs={12}>
        <Typography variant="h2" className="textColor">
          Designing
        </Typography>
        <Typography
          variant="body1"
          className="textColor"
          style={{ marginTop: "30px" }}
        >
          We innovate unique designs which interpret your buisness,advertising 
          ideas and we help you to reach high with 3D animations,illustrations and
          all the new web designs in the tech world.
        </Typography>
        <ul className="content">
          {liItems.map((item, i) => (
            <li
              key={i}
              style={{ flexGrow: 1, flexWrap: "wrap", color: "white" }}
            >
              <Typography
                variant="body2"
                className="textColor"
                style={{ marginTop: "10px" }}
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Content;
