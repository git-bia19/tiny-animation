import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";


const ContentWriting = () => {
  const {  timing } = pulse;
  const { ref } = useWebAnimations({
    keyframes :{
      transform: "translateX(100%)",
    } ,
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
    "Headlines & Taglines",
    "Content Strategy",
    "Blogs & Articles",
    "Social Media Content",
    "Video Scripts",
    "eDMs & Newsletters",
    "Case Studies",
    "Whitepapers",
  ];

  return (
    <Grid container style={{ marginTop: "80px" }}>
      <Grid item sm={5} xs={12}>
        <Typography variant="h2" className="textColor">
       Marketing Drive
        </Typography>
        <Typography
          variant="body1"
          className="textColor"
          style={{ marginTop: "30px" }}
        >
          We'll run a marketing drive for you to reach out globally to a 
          larger audience so that your brands name is already out there before you launch 
          your website.
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
      <Grid item sm={1} />
      <Grid item sm={6} xs={12}>
      <img
          src={require( "../images/cars.png")}
          className="target"
          ref={ref}
          alt=""
          width ="200"
          height ="200"
          class ="car"
        />
        <img
          src={require( "../images/world.png")}
          className="target"
          alt=""
          width ="300"
          height ="350"
          class ="world"
        />
       
      </Grid>
    </Grid>
  );
};

export default ContentWriting;
