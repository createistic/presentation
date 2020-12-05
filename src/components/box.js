import React from "react";
import { useDeck } from "mdx-deck";

const wrapperStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
};

const Wrapper = ({ children }) => <div style={wrapperStyle}>{children}</div>;

const footerStyle = {
  fontSize: "14px",
  color: "rgb(61, 77, 101)",
  padding: "30px 100px",
  textAlign: "right",
  width: "100vw",
  borderTop: "1px solid silver",
  display: "flex",
  justifyContent: "space-between",
};

const Footer = ({ children }) => (
  <footer style={footerStyle}>{children}</footer>
);

const Layout = ({ children }) => {
  const { index, length } = useDeck();
  return (
    <>
      <Wrapper>{children}</Wrapper>
      <Footer>
        <span>Team Createistic 🏝</span>
        ⬅️ {index + 1}/{length} ➡️
        <span>
          @2020
          {/* <img style={{ height: 50 }} src={logo} /> */}
        </span>
      </Footer>
    </>
  );
};
export default Layout;
