import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
  if (hobbies.length) {
    const list = hobbies.map((hobby, index) => {
      return (
      <li key= {index}>{hobby}</li>
      )
    })
    
    return (
    <>
    <h4>Hobbies</h4>
    <ul>{list}</ul>
    </>
    );
  }

  return null
}

export default HobbyList;
