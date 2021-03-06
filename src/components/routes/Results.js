import React, { useState } from "react";
import ResultsPopUp from "../ResultsPopUp";
import "./results.css";

const Results = ({ federal, state, local, judicial, measures, bonus }) => {
  const [isPopUp, setIsPopUp] = useState(true);

  return (
    <div className="results">
      <ResultsPopUp
        isPopUp={isPopUp}
        setIsPopUp={setIsPopUp}
        federal={federal}
        state={state}
        local={local}
        judicial={judicial}
        measures={measures}
        bonus={bonus}
      />
      <h1 className="resultsHeader">You're ready to vote!</h1>
      <div className="resultsMain">
        <p className="resultsSubHeader"> Next steps:</p>
        <div className="nextSteps">
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="eachNextStep">
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
            <p className="step last">
              Election Day <br /> 11/3
            </p>
          </div>
          <div className="additionalInfo">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
