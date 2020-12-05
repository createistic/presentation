import { themes } from "mdx-deck";
import okaidia from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";

export default {
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
  },
  fontWeights: {
    heading: 600,
    bold: 600,
  },
  colors: {
    background: "#F5F5EE",
    text: "rgb(61, 77, 101)",
    textBlack: "#000",
  },
  text: {
    heading: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  styles: {
    h1: {
      textAlign: "center",
      marginLeft: 50,
      marginRight: 50,
      color: "#000",
      fontFamily: "Futura",
    },
    ul: {
      listStyle: "none",
    },
    li: {
      marginBottom: 20,
    },
    a: {
      color: "#07c",
    },
  },
};

const rnd = {
  ...themes.future,
  font: "system-ui, sans-serif",
  monospace: "Menlo, monospace",
  div: {
    textAlign: "left",
  },
  pre: {
    textAlign: "left",
  },
  ol: {
    textAlign: "left",
  },
  ul: {
    textAlign: "left",
  },
  styles: {
    fontSize: "16px",
    textAlign: "left",
    "@media screen and (min-width:56em)": {
      fontSize: "32px",
    },
    "@media screen and (min-width:64em)": {
      fontSize: "48px",
    },
    "@media print": {
      fontSize: "40px",
    },
    "li > p": {
      margin: 0,
    },
  },

  colors: {
    text: "rgb(61, 77, 101)",
    background: "white",
    link: "#07c",
    pre: "#f0f",
    preBackground: "#333",
    code: "#f0f",
  },

  prism: {
    style: okaidia,
  },
};
