import React, { useState, useEffect } from "react";
import i1 from "../images/flow.png";
import i2 from "../images/lowcode.png";
import i3 from "../images/fullservice.png";

const reelStyle = { margin: "0 auto", width: "60%", height: "60%" };
const imgStyle = { objectFit: "contain", width: "100%", height: "100%" };

const ImgBox = ({ name }) => {
  const img = name === "fullservice" ? i3 : name === "lowcode" ? i2 : i1;

  return (
    <div style={reelStyle}>
      <img style={imgStyle} src={img} />
    </div>
  );
};

export default ImgBox;
