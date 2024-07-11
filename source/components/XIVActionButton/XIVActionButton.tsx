import React from "react";

import * as stylex from "@stylexjs/stylex";

interface Props {
  disabled?: boolean;
}

export default function XIVActionButton({ disabled }: Props) {
  return (
    <div {...stylex.props([styles.container, styles.topInsetShadow])}></div>
  );
}

const styles = stylex.create({
  container: {
    width: 40,
    height: 40,
    position: "relative",
    boxSizing: "border-box",
    borderRadius: 5,
    overflow: "hidden",
    "::before": {
      height: "20%",
      width: "100%",
      background:
        "linear-gradient(to bottom,rgba(255,255,255,.6) 0%,rgba(255,255,255,.15) 100%)",
      top: 0,
      left: 0,
      position: "absolute",
      content: " ",
      // background:
      //   "-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(255,255,255,.6)),color-stop(100%,rgba(255,255,255,.15)))",
    },
    "::after": {
      content: " ",
      borderWidth: 1,
      borderColor: "#303030",
      borderStyle: "solid",
      boxShadow: "inset 0 0 1px #fff6,inset 0 1px #fff6,0 1px 2px #0000004d",
    },
  },
  topInsetShadow: {
    boxShadow: "0 0 2px 1px black",
  },
});
