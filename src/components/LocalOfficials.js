import React from "react";
import "./localOfficials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LocalOfficials = ({ localReps, localRepsNames, isLocal }) => {
  return (
    <div className={`localOfficials ${isLocal ? null : "hide"}`}>
      {localReps
        ? localReps.offices.map((office) => {
            return office.officialIndices.map((official) => {
              return (
                <div className="localOfficialsCard">
                  {localRepsNames ? (
                    <div>
                      {localRepsNames[official].photoUrl ? (
                        <img
                          className="localOfficialsImg"
                          src={localRepsNames[official].photoUrl}
                          alt={localRepsNames[official].name}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faUser}
                          className="placeholder"
                        />
                      )}
                    </div>
                  ) : null}
                  <p>{localRepsNames ? localRepsNames[official].name : null}</p>
                  <p>{office.name}</p>
                </div>
              );
            });
          })
        : null}
    </div>
  );
};

export default LocalOfficials;
