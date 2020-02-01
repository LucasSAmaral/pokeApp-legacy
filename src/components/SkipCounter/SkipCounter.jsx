import React from "react";

const SkipCounter = props => {
  return (
    <div className="container__timesWithoutSkip">
      {`${props.text}: ${props.counter}`}
    </div>
  );
};

export default SkipCounter;
