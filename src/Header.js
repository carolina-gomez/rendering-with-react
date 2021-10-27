import React from "react";
import "./Header.css";

function Header({ name,imageSrc,birthday }) {
  return (
    <>
    <img src={imageSrc} alt="Kitten" width="500" height="600"></img>
    <h1>{name}</h1>
    <h2>Birthday: {birthday}</h2>
    </>
  );
}

export default Header;
