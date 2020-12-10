import React from "react";
import arch from "../images/architecture.png";
import persona from "../images/persona.png";
import logo from "../images/logo-garlic.png";

const CustomImage = ({ name }) => {
  const imgSrc = name === "persona" ? persona : name === "logo" ? logo : arch;
  return (
    <div>
      <img alt={name} src={imgSrc} />
    </div>
  );
};

export default CustomImage;
