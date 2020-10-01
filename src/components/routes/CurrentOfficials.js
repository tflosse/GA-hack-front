import React, { useState, useEffect } from "react";
import "./currentOfficials.css";
import FedOfficials from "../FedOfficials";
import StateOfficials from "../StateOfficials";

const CurrentOfficials = () => {
  const key = process.env.REACT_APP_api_key;
  const [address, setAddress] = useState(
    "1%20East%20Elliott%20St.%2C%20Charleston%2C%20South%20Carolina%2029401"
  );
  const [fedReps, setFedReps] = useState(null);
  // get specific name info from fedReps object
  const [fedRepsNames, setFedRepsNames] = useState(null);
  const [stateReps, setStateReps] = useState(null);
  console.log(stateReps)
  // get specific name info from fedReps object
  const [stateRepsNames, setStateRepsNames] = useState(null);
  console.log(stateRepsNames)

  const makeFedApiCall = async () => {
    const res = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=country&key=${key}`
    );
    const json = await res.json();
    setFedReps(json);
    setFedRepsNames(json.officials);
  };

  const makeStateApiCall = async () => {
    const res = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=administrativeArea1&key=${key}`
    );
    const json = await res.json();
    setStateReps(json);
    setStateRepsNames(json.officials);
  };

  // const makeLocalApiCall = async () => {
  //   const res = await fetch(
  //     `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=administrativeArea2&levels=locality&key=${key}`
  //   );
  //   const json = await res.json();
  //   setArtistInfo(json.artists);
  // };

  useEffect(() => {
    makeFedApiCall();
    makeStateApiCall();
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
      <FedOfficials fedReps={fedReps} fedRepsNames={fedRepsNames} />
      {/* <StateOfficials stateReps={stateReps} stateRepsNames={stateRepsNames} /> */}
    </div>
  );
};

export default CurrentOfficials;
