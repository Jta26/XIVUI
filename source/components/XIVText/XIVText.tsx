import React, { ReactNode } from "react";

import * as stylex from "@stylexjs/stylex";

export enum XIVTextStyle {
  body,
  headline,
}

interface Props {
  children: ReactNode;
  textStyle?: XIVTextStyle;
}

export default function XIVText({
  children,
  textStyle = XIVTextStyle.body,
}: Props) {
  switch (textStyle) {
    case XIVTextStyle.body:
      return (
        <p {...stylex.props([styles.text, textStyles.body])}>{children}</p>
      );
      break;
    case XIVTextStyle.headline:
      return (
        <h1 {...stylex.props([styles.text, textStyles.headline])}>
          {children}
        </h1>
      );
      break;
    default:
      return (
        <p {...stylex.props([styles.text, textStyles.body])}>{children}</p>
      );
      break;
  }
}

const styles = stylex.create({
  text: {
    fontFamily: "meiryo",
  },
});

const textStyles = stylex.create({
  body: {
    fontSize: 14,
  },
  headline: {
    fontSize: 26,
  },
  hero: {
    fontSize: 42,
  },
});
