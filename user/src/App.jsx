import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
// import Footer from "./components/topdown/Topdown";
import Topdown from "./components/topdown/Topdown";
import "./App.scss";
import React,{ useState } from "react";
import Menu from "./components/menu/Menu";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Error from "./components/error/Error";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
      <Topdown className="topdown"></Topdown>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/intro" element={ <Intro></Intro>}/>
        <Route path="/portfolio" element={  <Portfolio></Portfolio>}/>
        <Route path="/works" element={    <Works></Works>}/>
        <Route path="/testimonials" element={    <Testimonials></Testimonials>}/>    
        <Route path="/contact" element={   <Contact></Contact>}/>  
        <Route path="*" element={<Error/>}/>
      
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
