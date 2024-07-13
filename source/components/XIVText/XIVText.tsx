import React, { ReactNode } from "react";

import * as stylex from "@stylexjs/stylex";

export enum XIVTextStyle {
  body,
  headline,
}

interface Props {
  children: ReactNode;
  textStyle?: XIVTextStyle;
  textAlign?: "left" | "center" | "right";
  xstyle?: stylex.StaticStyles;
}

export default function XIVText({
  children,
  textStyle = XIVTextStyle.body,
  textAlign = "left",
  xstyle,
}: Props) {
  switch (textStyle) {
    case XIVTextStyle.body:
      return (
        <p
          {...stylex.props([
            styles.text,
            textStyles.body,
            xstyle,
            textAlignStyles[textAlign],
          ])}
        >
          {children}
        </p>
      );
      break;
    case XIVTextStyle.headline:
      return (
        <h1
          {...stylex.props([
            styles.text,
            textStyles.headline,
            xstyle,
            textAlignStyles[textAlign],
          ])}
        >
          {children}
        </h1>
      );
      break;
    default:
      return (
        <p
          {...stylex.props([
            styles.text,
            textStyles.body,
            xstyle,
            textAlignStyles[textAlign],
          ])}
        >
          {children}
        </p>
      );
      break;
  }
}

const styles = stylex.create({
  text: {
    fontFamily: "meiryo",
    color: "white",
  },
});

const textStyles = stylex.create({
  body: {
    fontSize: 14,
  },
  headline: {
    fontSize: 40,
    fontFamily: "TrumpGothicPro",
    color: "#CCCCCC",
    letterSpacing: 2,
    textShadow: "1px 1px 1px rgba(0,0,0,1)",
  },
  hero: {
    fontSize: 42,
  },
});

const textAlignStyles = stylex.create({
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});
