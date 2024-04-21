import React, { useState } from "react";
import "../css/Home.css";

function Body() {
  const [count, setCount] = useState(0);
  return (
    <>
        <div className="bodyDiv">
              <div className="homeBanner">
                <div className="homeBannerInfo">
                  <div className="cardHomeOne">
                    <h1>Wellness behandlinger</h1>
                  </div>
                  <div className="cardHomeOne">
                    <h1>Smerte behandlinger</h1>
                  </div>
                </div>
              </div>
              <div className="cardHome">
                <h1>FIND OS PÅ DEN ...............</h1>
              </div>
             
      </div>
    </>
  );
}

export default Body;
