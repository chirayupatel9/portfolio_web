import React, { useMemo } from "react";
import "./Section2.css";
import Hover from "react-3d-hover";
import { createTheme, Divider, ThemeProvider, Typography } from "@mui/material";

function Section2() {
  // Memoizing the JSX inside hover components to avoid unnecessary re-renders
  const memoizedImage = useMemo(
    () => (
      <Hover perspective={250} max={20}>
        <img
          src="/images/me2.jpg"
          className="avatar"
          alt="haha this is fatty"
          loading="lazy" // Lazy load image
        />
      </Hover>
    ),
    [] // Dependencies are empty as this won't change
  );
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "1rem", // Default font size for very small screens
    "@media (min-width:480px)": {
      fontSize: "1.2rem", // Font size for screens >= 480px
    },
    "@media (min-width:600px)": {
      fontSize: "1.5rem", // Font size for screens >= 600px
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem", // Font size for screens >= md breakpoint (960px by default)
    },
  };
  const memoizedDescription = useMemo(
    () => (
      <Hover perspective={500} max={20}>
        <Typography variant="h5">
          I'm a hobbyist photographer and programmer. My first focus is coding,
          and if I can't find the bugs, I have been using my camera to look for
          them. I used Code::Blocks to complete my bachelor's degree in computer
          engineering. I'm currently working on my master's degree with Visual
          Studio Code. Despite the fact that PyCharm was charming, a gentle
          storm entitled WebStorm also played a significant role.
        </Typography>
      </Hover>
    ),
    []
  );

  return (
    <div className="section2-container">
      <Divider>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">About Me</Typography>
        </ThemeProvider>
      </Divider>

      <div className="section2-content">
        <div className="flex-container">
          <div className="flex-left">{memoizedImage}</div>
          <div className="flex-right">{memoizedDescription}</div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
