import React, { useState } from "react";
import AccordionItems from './components/AccordionItems';

import "./App.css";

function App() {

  const [isActive, setIsActive] = useState(false);


  return (
    <div className="container">
      <div className="about-accordion">
        <div className="big-accordion" onClick={() => setIsActive(!isActive)}>
          <div className="about">
            <h2 className="title">About Us</h2>
            <span className="span">4 articles on this topic</span>
          </div>
          <div>{isActive ? "-" : "+"}</div >
        </div>
      </div>
      {isActive && <AccordionItems onClick='about-accordion'/>}
    </div>
  );
}

export default App;
