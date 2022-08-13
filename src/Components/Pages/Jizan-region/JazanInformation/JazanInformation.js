import React, { Fragment } from "react";
import Features from "./Features/Features";
import History from "./History/History";
import Properties from "./Properties/Properties";
import "./JazanInformation.css";




const  JazanInformation = () => {
  
  return (
    <Fragment>
          <div className="container">
            <Features />
            <Properties />
            <History />
          </div>
    </Fragment>
  );
}

export default JazanInformation;
