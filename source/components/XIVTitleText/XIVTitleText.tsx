import React, { ReactNode } from "react";

import * as stylex from "@stylexjs/stylex";

interface Props {
  children: ReactNode;
}

export default function XIVTitleText({ children }: Props) {
  return <h1 {...stylex.props(styles.text)}>{children}</h1>;
}

const styles = stylex.create({
  text: {
    textShadow: "1px 1px 4px black",
    fontFamily: "JupiterProRegular",
    fontSize: 30,
    color: "#C3A971",
    letterSpacing: ".25rem",
  },
});
