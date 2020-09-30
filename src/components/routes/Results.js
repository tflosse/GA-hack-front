import React, { useState } from "react";
import ResultsPopUp from "../ResultsPopUp";
import "./results.css";

const Results = () => {
  const [isPopUp, setIsPopUp] = useState(true);

  return (
    <div className="results">
      <ResultsPopUp isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
      <h1 className="resultsHeader">You're ready to vote!</h1>
      <div className="resultsMain">
        <p className="resultsSubHeader"> Next steps:</p>
        <div className="nextSteps">
          <p className="step">
            Invite your friends <br /> to take the quiz!
          </p>
          <p className="step">
            Register to vote <br /> by _______
          </p>
          <p className="step">
            Find your poll <br /> locations
          </p>
          <p className="step">
            Mail in your ballot <br /> by ______
          </p>
          <p className="step">
            Election Day <br /> 11/3
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
