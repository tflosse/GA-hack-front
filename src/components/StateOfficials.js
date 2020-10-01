import React from "react";
import "./stateOfficials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const StateOfficials = ({ stateReps, stateRepsNames, isState }) => {
  return (
    <div className={`stateOfficials ${isState ? null : "hide"}`}>
      {stateReps
        ? stateReps.offices.map((office) => {
            return office.officialIndices.map((official) => {
              return (
                <>
                  {stateRepsNames ? (
                    <div className="stateOfficialsCard">
                      <div>
                        {stateRepsNames[official].photoUrl ? (
                          <img
                            className={`stateOfficialsImg ${
                              stateRepsNames[official].party ===
                              "Republican Party"
                                ? "red"
                                : ""
                            }`}
                            src={stateRepsNames[official].photoUrl}
                            alt={stateRepsNames[official].name}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faUser}
                            className={`placeholder ${
                              stateRepsNames[official].party ===
                              "Republican Party"
                                ? "red"
                                : ""
                            }`}
                          />
                        )}
                      </div>
                      <p className="realName">
                        {stateRepsNames ? stateRepsNames[official].name : null}
                      </p>
                      <p className="title">{office.name}</p>
                    </div>
                  ) : null}
                </>
              );
            });
          })
        : null}
    </div>
  );
};

export default StateOfficials;
