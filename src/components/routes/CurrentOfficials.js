import React, { useState, useEffect } from "react";
import "./currentOfficials.css";
import FedOfficials from "../FedOfficials";

const CurrentOfficials = () => {
  const key = process.env.REACT_APP_api_key;
  const [fedReps, setFedReps] = useState(null);
  console.log(fedReps);
  // get specific name info from fedReps object
  const [fedRepsNames, setFedRepsNames] = useState(null)
  console.log(fedRepsNames)

  const makeFedApiCall = async () => {
    const res = await fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=1%20East%20Elliott%20St.%2C%20Charleston%2C%20South%20Carolina%2029401&levels=country&key=${key}`
    );
    const json = await res.json();
    setFedReps(json);
    setFedRepsNames(json.officials)
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
      <h1>Current Officials</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor urna,
        ut mi sed scelerisque ullamcorper nisi, vulputate orci. Nunc habitant
        vitae rutrum pharetra ut leo. Interdum ornare donec a molestie morbi sed
        non, et ac.
      </p>
      <FedOfficials fedReps={fedReps} fedRepsNames={fedRepsNames}/>
    </div>
  );
};

export default CurrentOfficials;
