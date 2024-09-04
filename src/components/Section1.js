import React, { useMemo } from "react";
import { CarouselM } from "./CarouselObject/Carousel";
import Projects from "./projects";
import "./Section1.css";
import Hover from "react-3d-hover";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { createTheme, Divider, ThemeProvider, Typography } from "@mui/material";

function Section1() {
  // Memoize the Projects array to avoid unnecessary re-renders
  const memoizedProjects = useMemo(() => Projects, []);
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: '1rem', // Default font size for very small screens
    '@media (min-width:480px)': {
      fontSize: '1.2rem', // Font size for screens >= 480px
    },
    '@media (min-width:600px)': {
      fontSize: '1.5rem', // Font size for screens >= 600px
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem', // Font size for screens >= md breakpoint (960px by default)
    },
  };
  
  
  return (
    <div>
      <Divider variant="middle" >
      <ThemeProvider theme={theme}>
      <Typography variant="h3">Projects</Typography>
      </ThemeProvider>
      </Divider>
      <div style={{ paddingTop: 20 }}>
        <CarouselM
          slides={memoizedProjects.map((item) => (
            <Hover key={item.id}>
              <div className="cardbg">
                <Carousel variant="dark">
                  {item.video.map((x, index) => (
                    <Carousel.Item key={index}>
                      <div className="imgfitt">
                        <img
                          src={x.source}
                          alt={item.title}
                          className="imgfull"
                          loading="lazy" // Lazy loading for better performance
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>

                <div className="textblck">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Hover>
          ))}
          arrows={true}
          arrowBorders={false}
        />
      </div>
    </div>
  );
}

export default Section1;
