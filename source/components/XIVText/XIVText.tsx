import React, { ReactNode } from "react";

import * as stylex from "@stylexjs/stylex";

export enum XIVTextStyle {
  body,
  headline,
  hero,
}

interface Props {
  children: ReactNode;
  textStyle: XIVTextStyle;
}

export default function XIVUIText({
  children,
  textStyle = XIVTextStyle.body,
}: Props) {
  switch (textStyle) {
    case XIVTextStyle.body:
      return (
        <p {...stylex.props([styles.text, textStyles.body])}>{children}</p>
      );
    case XIVTextStyle.headline:
      return (
        <h1 {...stylex.props([styles.text, textStyles.headline])}>
          {children}
        </h1>
      );
    case XIVTextStyle.hero:
      return (
        <h1 {...stylex.props([styles.text, textStyles.hero])}>{children}</h1>
      );
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
    fontSize: 18,
  },
  hero: {
    fontSize: 26,
  },
});
