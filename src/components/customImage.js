import React from "react";
import arch from "../images/architecture.png";

//  const reelStyle = { margin: "0 auto", width: "60%", height: "60%" };
// const imgStyle = { objectFit: "contain", width: "100%", height: "100%" };

const CustomImage = ({ name }) => {
  return (
    <div>
      <img alt={name} src={arch} />
    </div>
  );
};

export default CustomImage;
