import React from "react";
import tictactoc from "../lib/tictactoc";

const toggleBackground = ({ next }) => {
  const bgColors = tictactoc.getBgColors();
  const styles = {
    backgroundColor: next ? bgColors[0] : bgColors[1],
    animation: next
      ? "background-ani .4s ease-in-out forwards"
      : "background-ani2 .41s ease-in-out forwards"
  };
  return <div id="toggle-bg" style={styles} />;
};

export default toggleBackground;
