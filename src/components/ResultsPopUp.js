import React from "react";
import ProgressBar from "react-animated-progress-bar";
import "./resultsPopUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const ResultsPopUp = ({ isPopUp, setIsPopUp }) => {
  return (
    <div className={`resultsPopUp ${isPopUp ? null : "hide"}`}>
      <div className="resultsPopUpInner">
        <FontAwesomeIcon
          icon={faTimes}
          className="exitLogo"
          onClick={() => setIsPopUp(false)}
        />
        <div className="resultsPopUpMain">
          <h1>Your Quiz Results</h1>
          <div className="allResultsBars">
            <div className="resultsBar">
              <p>Federal</p>
              <ProgressBar
                width="100"
                trackWidth="13"
                percentage="100"
                defColor={{
                  good: "red",
                  excellent: "blue",
                }}
              />
            </div>
            <div className="resultsBar">
              <p>State</p>
              <ProgressBar
                width="100"
                trackWidth="13"
                percentage="100"
                defColor={{
                  good: "red",
                  excellent: "blue",
                }}
              />
            </div>
            <div className="resultsBar">
              <p>Local</p>
              <ProgressBar
                width="100"
                trackWidth="13"
                percentage="0"
                defColor={{
                  good: "red",
                  excellent: "blue",
                }}
              />
            </div>
            <div className="resultsBar">
              <p>Judicial</p>
              <ProgressBar
                width="100"
                trackWidth="13"
                percentage="50"
                defColor={{
                  good: "red",
                  excellent: "blue",
                }}
              />
            </div>
            <div className="resultsBar">
              <p>Measures</p>
              <ProgressBar
                width="100"
                trackWidth="13"
                percentage="0"
                defColor={{
                  good: "red",
                  excellent: "blue",
                }}
              />
            </div>
            <div className="resultsBar">
              <p>General</p>
              <ProgressBar
                width="100"
                trackWidth="13"
                percentage="100"
                defColor={{
                  good: "red",
                  excellent: "blue",
                }}
              />
            </div>
          </div>
          <div className="resultsInfo">
            <h1>Your Quiz Results</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              urna, ut mi sed scelerisque ullamcorper nisi, vulputate orci. Nunc
              habitant vitae rutrum pharetra ut leo. Interdum ornare donec a
              molestie morbi sed non, et ac.
            </p>
            <br />
            <p>Shared with friends</p>
            <FontAwesomeIcon icon={faFacebookSquare} className="socialLogo" />
            <FontAwesomeIcon icon={faInstagramSquare} className="socialLogo" />
            <FontAwesomeIcon icon={faTwitter} className="socialLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPopUp;
