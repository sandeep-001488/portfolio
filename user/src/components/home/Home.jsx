// components/home/Home.js
import React from "react";
import Intro from "../intro/Intro";
import Portfolio from "../portfolio/Portfolio";
import Works from "../works/Works";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Topbar from "../topbar/Topbar";
import Menu from "../menu/Menu";
import { useState } from "react";
import './home.scss'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>

    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
    <div className="home">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
    </div>
    </div>
  );
};

export default Home;
