import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import "./HeaderFile.css";
import Hover from "react-3d-hover";

function HeaderFile() {
  return (
    <ParallaxProvider>
      <div className="header-container">
        <ParallaxBanner
          className="bannerBg"
          style={{ aspectRatio: "2 / 1.4" }}
          layers={[
            {
              speed: -10,
              children: (
                <video
                  className="video"
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  muted
                  poster="video/fphoto.jpg"
                  src="video/f.mp4"
                />
              ),
            },
          ]}
        >
          <div className="parallaxChildren">
            <Hover perspective={100} scale={1.2} max={30}>
              <h1 className="h1">Hi...</h1>
            </Hover>
          </div>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
}

export default HeaderFile;
