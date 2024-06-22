import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import React, { useEffect, useState } from "react";
import { devPortfolio,langPortfolio,dataSciencePortfolio,featuredFolio } from "../../data";

const Portfolio = () => {
  const [selecetd, setSelected] = useState("featured");
  const [data,setData]=useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "full-stack",
      title: "Full-Stack",
    },
    {
      id: "language",
      title: "Language",
    },
    {
      id: "dataScience",
      title: "DataScience",
    },
  ];

  useEffect(()=>{
    switch (selecetd) {
      case "dataScience":
        setData(dataSciencePortfolio)
        
        break;
      case "full-stack":
        setData(devPortfolio)
        break;
      case "language":
        setData(langPortfolio)  
        break;
      default:
        setData(featuredFolio)
        break;
    }

  },[selecetd])
  return (
    <div className="portfolio" id="portfolio">
      <h1>PortFolio</h1>
      <ul>
      
        {list.map((item) => (
          <PortfolioList title={item.title} active={selecetd===item.id} setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="containerr">
       
        {data.map((obj)=>(
            <div className="item">
            <img src={obj.img} alt="" />
            <h3>{obj.title}</h3>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Portfolio;
