import React, { useState } from "react";
import ResultsPopUp from "../ResultsPopUp";

const Results = () => {
  const [isPopUp, setIsPopUp] = useState(true);

  return (
    <div>
      <ResultsPopUp isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
    </div>
  );
};

export default Results;
