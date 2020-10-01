import React, { useState, useEffect } from "react";
import "./currentOfficials.css";
import FedOfficials from "../FedOfficials";
import StateOfficials from "../StateOfficials";
import LocalOfficials from "../LocalOfficials";

const CurrentOfficials = () => {
  const key = process.env.REACT_APP_api_key;
  const [address, setAddress] = useState("51 Rose Ave, Venice, CA 90291");

  const reformatAddress = (address) => {
    let format1 = address.replace(/ /g, "%20");
    let format2 = format1.replace(/,/g, "%2C");
    return format2;
  };

  const [fedReps, setFedReps] = useState(null);
  // get specific name info from fedReps object
  const [fedRepsNames, setFedRepsNames] = useState(null);

  const [stateReps, setStateReps] = useState(null);
  const [stateRepsNames, setStateRepsNames] = useState(null);
  console.log(stateRepsNames);

  const [localReps, setLocalReps] = useState(null);
  const [localRepsNames, setLocalRepsNames] = useState(null);

  // these variables set what is displayed on page
  const [isFed, setIsFed] = useState(true);
  console.log(isFed);
  const [isState, setIsState] = useState(false);
  console.log(isState);
  const [isLocal, setIsLocal] = useState(false);
  console.log(isLocal);

  const makeFedApiCall = async () => {
    const res = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${reformatAddress(
        address
      )}&levels=country&key=${key}`
    );
    const json = await res.json();
    setFedReps(json);
    setFedRepsNames(json.officials);
  };

  const makeStateApiCall = async () => {
    const res = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${reformatAddress(
        address
      )}&levels=administrativeArea1&key=${key}`
    );
    const json = await res.json();
    setStateReps(json);
    setStateRepsNames(json.officials);
  };

  const makeLocalApiCall = async () => {
    const res = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${reformatAddress(
        address
      )}&levels=administrativeArea2&levels=locality&key=${key}`
    );
    const json = await res.json();
    setLocalReps(json);
    setLocalRepsNames(json.officials);
  };

  useEffect(() => {
    makeFedApiCall();
    makeStateApiCall();
    makeLocalApiCall();
  }, []);

  return (
    <div className="currentOfficials">
      <div className="currentOfficialsHeader">
        <h1>Current Officials</h1>
        <p className="currentOfficialsInfoMobile">
          Learn more about your current federal, local, statewide and judicial
          elected officials. Explore the backgrounds and opinions of every
          candidate to help you make an informed vote at the ballot.
        </p>
        <p className="currentOfficialsInfoExpand">
          Learn more about your current federal, local, statewide and judicial
          elected officials.
          <br /> Explore the backgrounds and opinions of every candidate to help
          you make an
          <br />
          informed vote at the ballot.
        </p>
      </div>
      <div className="govLevel">
        <p
          onClick={() => setIsFed(true) & setIsLocal(false) & setIsState(false)}
          className={`${isFed ? "color" : ""}`}
        >
          Federal
        </p>
        <p
          onClick={() => setIsState(true) & setIsLocal(false) & setIsFed(false)}
          className={`${isState ? "color" : ""}`}
        >
          State
        </p>
        <p
          onClick={() => setIsLocal(true) & setIsFed(false) & setIsState(false)}
          className={`${isLocal ? "color" : ""}`}
        >
          Local
        </p>
      </div>
      <FedOfficials
        fedReps={fedReps}
        fedRepsNames={fedRepsNames}
        isFed={isFed}
      />
      <StateOfficials
        stateReps={stateReps}
        stateRepsNames={stateRepsNames}
        isState={isState}
      />
      <LocalOfficials
        localReps={localReps}
        localRepsNames={localRepsNames}
        isLocal={isLocal}
      />
    </div>
  );
};

export default CurrentOfficials;
