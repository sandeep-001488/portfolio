import "./topbar.scss";
import React from 'react'

import AccessibilityIcon from "@mui/icons-material/Accessibility";
import MailIcon from "@mui/icons-material/Mail";

const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar "+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#works" className="view">
          𝑶𝒏𝒍𝒚 𝒚𝒐𝒖 𝒅𝒆𝒄𝒊𝒅𝒆 𝒚𝒐𝒖𝒓 𝒗𝒊𝒔𝒊𝒐𝒏...
        
          </a>
          <div className="items-container"> 
         <a href="#contact">  <AccessibilityIcon className="icon"></AccessibilityIcon>
            <span>Contact</span></a> 
          </div>
          <div className="items-container">
          <a href = "mailto:sandeepsanu1230@gmail.com">
            <MailIcon className="icon"></MailIcon> 
            <span>EmailMe</span> </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
