import React from "react";
import ProgressBar from "react-animated-progress-bar";
import "./resultsPopUp.css";

const ResultsPopUp = () => {
  return (
    <div className="resultsPopUp">
      <div className="allResultsBars">
        <div className="resultsBar">
          <p>Federal</p>
          <ProgressBar width="100" trackWidth="13" percentage="100" />
        </div>
        <div className="resultsBar">
          <p>State</p>
          <ProgressBar width="100" trackWidth="13" percentage="100" />
        </div>
        <div className="resultsBar">
          <p>Local</p>
          <ProgressBar width="100" trackWidth="13" percentage="0" />
        </div>
        <div className="resultsBar">
          <p>Judicial</p>
          <ProgressBar width="100" trackWidth="13" percentage="50" />
        </div>
        <div className="resultsBar">
          <p>Measures</p>
          <ProgressBar width="100" trackWidth="13" percentage="0" />
        </div>
        <div className="resultsBar">
          <p>General</p>
          <ProgressBar width="100" trackWidth="13" percentage="100" />
        </div>
      </div>
      <div className="resultInfo">
        <h1>Your Results</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
          urna, ut mi sed scelerisque ullamcorper nisi, vulputate orci. Nunc
          habitant vitae rutrum pharetra ut leo. Interdum ornare donec a
          molestie morbi sed non, et ac.
        </p>
      </div>
    </div>
  );
};

export default ResultsPopUp;
