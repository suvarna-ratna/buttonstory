import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function Counter ({ backgroundColor, size }) {
  const [count, setCount] = useState(1);
  let incrementCount = () => {
    setCount(parseInt(count) + 1);
  };

  let decrementCount = () => {
    (count < 1) ? alert("Minimum item should be 1") : setCount(parseInt(count) - 1);
  };
  return (
    <div>
      <button
        type="button"
        style={backgroundColor && {backgroundColor}}
        onClick={incrementCount}
       >
        +
      </button>
      {/* <button
        style={backgroundColor}
       >
        {count}
      </button> */}
      <button
        type="button"
        style={backgroundColor && {backgroundColor}}
        onClick={decrementCount}
       >
        -
      </button>
      <p>{count}</p>
    </div>
  );
};

Counter.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Counter.defaultProps = {
  backgroundColor: 'red',
  size: 'medium'
};