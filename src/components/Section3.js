import React from "react";
import { CarouselM } from "./CarouselObject/Carousel";
import Images from "./images";
import "./Section3.css";
import Hover from "react-3d-hover";
import ReactCircleModal from "react-circle-modal";
import { AiOutlineClose } from "react-icons/ai";
import { createTheme, Divider, Paper, ThemeProvider, Typography } from "@mui/material";

function Section3() {
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
  return (
    <div className="pade">
      <>
        <div>
          <Divider variant="middle">
            <ThemeProvider theme={theme}>
            <Typography variant="h3">
             Because even bugs need <br/> a beautiful backdrop{" "}
            </Typography>
            </ThemeProvider>
          </Divider>
        </div>

        <div style={{ padding: 50 }}>
          <CarouselM
            slides={
              Images &&
              Images.map((item) => (
                <div>
                  <Hover perspective={1000} max={20}>
                    <ReactCircleModal
                      backgroundColor="rgba(0,0,0,0.2)"
                      toogleComponent={(onClick) => (
                        <button onClick={onClick}>
                          <img src={item.image} className="imgfit" />
                        </button>
                      )}
                      // Optional fields and their default values
                      offsetX={0}
                      offsetY={0}
                    >
                      {(onClick) => (
                        <div style={{ padding: "1em" }}>
                          <img src={item.image} className="imgfull" />

                          <button onClick={onClick} className="closebtn">
                            <AiOutlineClose />
                          </button>
                        </div>
                      )}
                    </ReactCircleModal>
                  </Hover>
                </div>
              ))
            }
            arrows={true}
            arrowBorders={false}
          />
        </div>
      </>
    </div>
  );
}

export default Section3;
