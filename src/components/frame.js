import React from "react";

const Frame = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
    <iframe style="border:none" width="1000" height="650" src="https://whimsical.com/embed/RkRQHcoimsrZGLU6KzFxxB"></iframe>
    `,
    }}
  />
);

export default Frame;
