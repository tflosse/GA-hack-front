import React from "react";
import "./fedOfficials.css";

const FedOfficials = ({ fedReps, fedRepsNames }) => {
  return (
    <div className="fedOfficials">
      {fedReps
        ? fedReps.offices.map((office) => {
            return office.officialIndices.map((official) => {
              return (
                <div className="fedOfficialsCard">
                  <img
                    className="fedOfficialsImg"
                    src={fedRepsNames ? fedRepsNames[official].photoUrl : null}
                    alt={fedRepsNames ? fedRepsNames[official].name : null}
                  />
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
