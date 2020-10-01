import React from "react";
import "./fedOfficials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const FedOfficials = ({ fedReps, fedRepsNames }) => {
  return (
    <div className="fedOfficials">
      {fedReps
        ? fedReps.offices.map((office) => {
            return office.officialIndices.map((official) => {
              return (
                <div className="fedOfficialsCard">
                  {fedRepsNames ? (
                    <div>
                      {fedRepsNames[official].photoUrl ? (
                        <img
                          className="fedOfficialsImg"
                          src={fedRepsNames[official].photoUrl}
                          alt={fedRepsNames[official].name}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faUser}
                          className="placeholder"
                        />
                      )}
                    </div>
                  ) : null}
                  <p>{fedRepsNames ? fedRepsNames[official].name : null}</p>
                  <p>{office.name}</p>
                </div>
              );
            });
          })
        : null}
    </div>
  );
};

export default FedOfficials;
