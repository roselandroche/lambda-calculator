import React from "react";

const OperatorButton = ({char}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='OperatorButton'>{char}</button>
    </>
  );
};

export default OperatorButton