
import './menu.scss'
import React from 'react'


const Menu = ({menuOpen,setMenuOpen}) => {
  return (   
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#intro">Home</a>
        </li>
        <li  onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li  onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#works">Works</a>
        </li>
        <li  onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li  onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
