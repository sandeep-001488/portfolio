import React from "react";
import "./error.scss";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404 Error...</h1>
      <h2>Sorry !! Page not found</h2>
      <p>And if you expect that there is any technical faults from our side ...Feel free to contact us at the mail above or message us in the provided button </p>
      <div className="btns">
        <NavLink to="/contact" className="navlink1"><button>Contact us</button></NavLink>
        <NavLink to="/" className="navlink2"><button>Back to home</button></NavLink>
        <ion-icon name="arrow-up-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Error;
