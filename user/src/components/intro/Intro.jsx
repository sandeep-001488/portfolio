import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";

const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        showCursor: true,
        strings: ["Full-Stack Developer", "Coding-enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    }
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src="assets/my_hack_pic2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello Guys! I'm</h2>
          <h1>Sandeep,</h1>
          <h3>
            an aspiring <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.jpeg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
