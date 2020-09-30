import React, { useState } from "react";
import ResultsPopUp from "../ResultsPopUp";

const Results = () => {
  const [isPopUp, setIsPopUp] = useState(true);

  return (
    <div className="results">
      <ResultsPopUp isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
      <h1>You're ready to vote!</h1>
    </div>
  );
};

export default Results;
