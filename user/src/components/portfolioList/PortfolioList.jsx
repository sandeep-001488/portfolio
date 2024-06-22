import './portfolioList.scss';
import React from 'react'

const PortfolioList = ({title,active,setSelected,id}) => {
  return <li className={active ? "portfoliolist active ":"portfoliolist"} onClick={()=>setSelected(id)} >
    {title}
  </li>;
  
};

export default PortfolioList;
