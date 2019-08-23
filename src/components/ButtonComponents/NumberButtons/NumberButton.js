import React from "react";
import { numbers } from '../path/to/data';

const NumberButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {numbers.map(item => {
        return <button className='NumberButton'>`${item}`</button>
      })}
    </>
  );
};

export default NumberButton;