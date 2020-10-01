import React from "react";
import "./fedOfficials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const FedOfficials = ({ fedReps, fedRepsNames, isFed }) => {
  return (
    <div className={`fedOfficials ${isFed ? null : "hide"}`}>
      {fedReps
        ? fedReps.offices.map((office) => {
            return office.officialIndices.map((official) => {
              return (
                <>
                  {fedRepsNames ? (
                    <div className="fedOfficialsCard">
                      <div>
                        {fedRepsNames[official].photoUrl ? (
                          <img
                            className={`fedOfficialsImg ${
                              fedRepsNames[official].party ===
                              "Republican Party"
                                ? "red"
                                : ""
                            }`}
                            src={fedRepsNames[official].photoUrl}
                            alt={fedRepsNames[official].name}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faUser}
                            className={`placeholder ${
                              fedRepsNames[official].party ===
                              "Republican Party"
                                ? "red"
                                : ""
                            }`}
                          />
                        )}
                      </div>
                      <p className="realName">
                        {fedRepsNames ? fedRepsNames[official].name : null}
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

export default FedOfficials;
