import React from "react";
import * as stylex from "@stylexjs/stylex";

export default function () {
  return (
    <div {...stylex.props(styles.container)}>
      <button {...stylex.props(styles.circleButton)}></button>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circleButton: {
    border: "none",
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "red",
    background:
      "linear-gradient(180deg, #636363 0%, #4B4B4B 45%, #373737 55%, #454545 100%)",
    boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  },
});
