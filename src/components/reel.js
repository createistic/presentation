import React, { useState, useEffect } from "react";
import i1 from "../images/img1.jpg";
import i2 from "../images/img2.jpg";
import i3 from "../images/img3.jpg";

const reelStyle = {};
const imgStyle = { height: "400px" };
const images = [i1, i2, i3];

const Reel = () => {
  const [state, setState] = useState({ currentImg: i1, pos: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const { pos } = state;
      const newPos = pos === 0 ? 1 : pos === 1 ? 2 : 0;
      setState({ ...state, currentImg: images[newPos], pos: newPos });
    }, 3000);
    return () => clearInterval(interval);
  }, [state]);

  return (
    <div style={reelStyle}>
      <img style={imgStyle} src={state.currentImg} />
    </div>
  );
};

export default Reel;
