import React from "react";
import "./Activity.css";

function Activity({ time,description }, index) {
  
  return <li key={index}>{time} {description}</li>;
}

export default Activity;
