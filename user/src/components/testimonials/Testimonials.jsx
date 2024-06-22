import "./testimonials.scss";
import React from 'react'
import { dataForTestimonials } from "../../data";

const Testimonials = () => {
  const handleImgClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="testimonials" id="testimonials">
      <h1>Coverage</h1>
      <div className="container">
       {dataForTestimonials.map((item)=>(
         <div className={item.featured?"card active":"card"}>
         <div className="top">
           <img src="assets/arrow3.png" className="left" alt="" />
           <img src={item.img} alt="" 
         className="user"/>
           <img src={item.icon} alt="" className="right" onClick={() => handleImgClick(item.link)} />
         </div>
         <div className="center">
          {item.description}
         </div>
         <div className="bottom">
           <h3>{item.name}</h3>
              <h4>{item.title}</h4>
         </div>
       </div>
       ))}
      </div>
    </div>
  );
};

export default Testimonials;
