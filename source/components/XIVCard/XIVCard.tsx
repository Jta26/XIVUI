import React, { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

interface Props {
  children: ReactNode;
  xstyle?: stylex.StaticStyles;
  contentXStyle?: stylex.StaticStyles;
}

export default function XIVUICard({ children, xstyle, contentXStyle }: Props) {
  return (
    <div {...stylex.props(xstyle)}>
      <div {...stylex.props(styles.outer)}>
        <div {...stylex.props(styles.inner)}>
          <div {...stylex.props([styles.content, contentXStyle])}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  outer: {
    width: "100%",
    height: "100%",
    boxShadow:
      "inset 0 1px 1px 0 #ded771, inset 0 0 1px 0 hsl(55deg 50% 60% / 5%), 0 0 1px 2px rgb(0 0 0 / 5%), 0 2px 2px 2px rgb(0 0 0 / 5%)",
    borderRadius: 10,
    position: "relative",
    margin: "4px auto 0",
    padding: 5,
    backgroundColor: "#7f6234",
    boxSizing: "border-box",
    color: "rgba(0,0,0,0.87)",
  },
  inner: {
    width: "100%",
    borderRadius: 4,
    display: "flex",
    position: "relative",
    flexDirection: "column",
    overflow: "hidden",
    backgroundImage: "linear-gradient(#636363,#313131 1.5rem)",

    height: "100%",
    boxSizing: "border-box",
    boxShadow:
      "inset 0 0 0 1px hsl(0deg 0% 100% / 10%), 0 0 0 2px #222, 0 3px 1px #ded771, 0 0 2px 1px rgb(0 0 0 / 40%)",
  },
  content: {
    marginInline: 10,
    marginBlock: 5,
  },
});
