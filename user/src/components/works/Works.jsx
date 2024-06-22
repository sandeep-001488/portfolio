import React, { useState, useEffect, useRef } from "react";
import "./works.scss";
import { dataForWorks } from "../../data";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);
  const totalSlides = dataForWorks.length;

  // Create a new array with the first and last slides duplicated
  const slides = [dataForWorks[totalSlides - 1], ...dataForWorks, dataForWorks[0]];

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentSlide === 0) {
        // Jump to the last slide (no transition)
        setCurrentSlide(totalSlides);
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(-${totalSlides * 100}vw)`;
      } else if (currentSlide === totalSlides + 1) {
        // Jump to the first slide (no transition)
        setCurrentSlide(1);
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(-100vw)`;
      }
    };

    slideRef.current.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      slideRef.current.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentSlide, totalSlides]);

  const handleClick = (direction) => {
    slideRef.current.style.transition = 'transform 0.5s ease-in-out';
    if (direction === "left") {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  

  return (
    <div className="works" id="works">
      <div
        className="slider"
        ref={slideRef}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((dataItem, index) => (
          <div className="container" key={index}>
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src={dataItem.icon} alt="" />
                  </div>
                  <h2>{dataItem.title}</h2>
                  <p>{dataItem.description}</p>
                  <span><a href={dataItem.link}>Project Link</a></span>
                </div>
              </div>
              <div className="right">
                <img src={dataItem.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow3.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow3.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Works;
