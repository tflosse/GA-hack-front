import React from "react";
import "./localOfficials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LocalOfficials = ({ localReps, localRepsNames, isLocal }) => {
  return (
    <>
      {localRepsNames ? (
        <div className={`localOfficials ${isLocal ? null : "hide"}`}>
          {localReps
            ? localReps.offices.map((office) => {
                return office.officialIndices.map((official) => {
                  return (
                    <>
                      {localRepsNames ? (
                        <a
                          href={
                            localRepsNames[official].urls
                              ? localRepsNames[official].urls[0]
                              : "https://www.vote.org/"
                          }
                          target="_blank"
                          className="link"
                        >
                          <div className="localOfficialsCard">
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
                                  className="localPlaceholder"
                                />
                              )}
                            </div>
                            <p className="realName">
                              {localRepsNames
                                ? localRepsNames[official].name
                                : null}
                            </p>
                            <p className="title">{office.name}</p>
                            <p className="title">
                              {localRepsNames[official].party}
                            </p>
                          </div>
                        </a>
                      ) : null}
                    </>
                  );
                });
              })
            : null}
        </div>
      ) : (
        <p>No Local Data Available</p>
      )}
    </>
  );
};

export default LocalOfficials;
