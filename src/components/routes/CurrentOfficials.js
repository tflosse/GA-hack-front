import React, { useState, useEffect } from "react";
import "./currentOfficials.css";
import FedOfficials from "../FedOfficials";

const CurrentOfficials = () => {
  const key = process.env.REACT_APP_api_key;
  const [fedReps, setFedReps] = useState(null);
  console.log(fedReps);
  // get specific name info from fedReps object
  const [fedRepsNames, setFedRepsNames] = useState(null);
  console.log(fedRepsNames);

  const makeFedApiCall = async () => {
    const res = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=1%20East%20Elliott%20St.%2C%20Charleston%2C%20South%20Carolina%2029401&levels=country&key=${key}`
    );
    const json = await res.json();
    setFedReps(json);
    setFedRepsNames(json.officials);
  };

  useEffect(() => {
    makeFedApiCall();
  }, []);

  // const makeStateApiCall = async () => {
  //   const res = await fetch(
  //     `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=1%20East%20Elliott%20St.%2C%20Charleston%2C%20South%20Carolina%2029401&levels=country&key=${key}`
  //   );
  //   const json = await res.json();
  //   setArtistInfo(json.artists);
  // };

  // const makeLocalApiCall = async () => {
  //   const res = await fetch(
  //     `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=1%20East%20Elliott%20St.%2C%20Charleston%2C%20South%20Carolina%2029401&levels=country&key=${key}`
  //   );
  //   const json = await res.json();
  //   setArtistInfo(json.artists);
  // };

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
    </div>
  );
};

export default CurrentOfficials;
