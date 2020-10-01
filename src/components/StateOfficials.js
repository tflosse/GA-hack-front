import React from "react";
import "./stateOfficials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const StateOfficials = ({ stateReps, stateRepsNames }) => {
  return (
    <div className="stateOfficials">
      {stateReps
        ? stateReps.offices.map((office) => {
            return office.officialIndices.map((official) => {
              return (
                <div className="stateOfficialsCard">
                  {stateRepsNames ? (
                    <div>
                      {stateRepsNames[official].photoUrl ? (
                        <img
                          className="stateOfficialsImg"
                          src={stateRepsNames[official].photoUrl}
                          alt={stateRepsNames[official].name}
                        />
                      ) : (
                        <FontAwesomeIcon icon={faUser} className="placeholder"/>
                      )}
                    </div>
                  ) : null}
                  <p>{stateRepsNames ? stateRepsNames[official].name : null}</p>
                  <p>{office.name}</p>
                </div>
              );
            });
          })
        : null}
    </div>
  );
};

export default StateOfficials;
