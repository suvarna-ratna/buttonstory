import React from "react";
import PropTypes from "prop-types";
import "./CounterComponent.styles.css";

export default function CounterComponent(backgroundColor) {
let [countNum, setCount] = React.useState(0);
let increaseValaue = () => {
setCount((countNum += 1)); //increases the count by 1
};
let decreaseValue = () => {
if (countNum === 0) {
alert("it has to be positive...");
} else {
setCount((countNum -= 1)); 
}
};// decreases the count by 1
let resetValue = () => {
setCount(0); //resets the count to 0
};
  return (
    <div className="counter-component">
      <h1> {countNum} </h1>
<button onClick={increaseValaue} style={backgroundColor}>+</button> 
<button onClick={decreaseValue} style={backgroundColor}>-</button>
<button onClick={resetValue} style={backgroundColor}>Reset</button>
    </div>
  );
}

CounterComponent.propTypes = {
  backgroundColor: PropTypes.string,
};

CounterComponent.defaultProps = {
  backgroundColor: 'aqua'
};
