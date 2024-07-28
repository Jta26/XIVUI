import React, { ReactNode } from "react";

import * as stylex from "@stylexjs/stylex";

export enum XIVTextStyle {
  body,
  headline,
  menu,
}

export enum XIVTextColor {
  primary,
  accent,
  headline,
}

interface Props {
  children: ReactNode;
  textStyle?: XIVTextStyle;
  textAlign?: "left" | "center" | "right";
  textColor?: XIVTextColor;
  xstyle?: stylex.StaticStyles;
}

function ColorStylesForTextColor(textColor: XIVTextColor) {
  switch (textColor) {
    case XIVTextColor.primary:
      return textColorStyles.primary;
      break;
    case XIVTextColor.accent:
      return textColorStyles.accent;
      break;
    case XIVTextColor.headline:
      return textColorStyles.headline;
      break;
    default:
      return textColorStyles.primary;
      break;
  }
}

export default function XIVText({
  children,
  textStyle = XIVTextStyle.body,
  textAlign = "left",
  textColor = XIVTextColor.primary,
  xstyle,
}: Props) {
  const textColorStyle = ColorStylesForTextColor(textColor);

  switch (textStyle) {
    case XIVTextStyle.body:
      return (
        <p
          {...stylex.props([
            styles.text,
            textStyles.body,
            xstyle,
            textAlignStyles[textAlign],
            textColorStyle,
          ])}
        >
          {children}
        </p>
      );
      break;
    case XIVTextStyle.menu:
      return (
        <p
          {...stylex.props([
            styles.text,
            textStyles.menu,
            xstyle,
            textAlignStyles[textAlign],
            textColorStyle,
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
            textColorStyles.headline,
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
            textColorStyle,
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
  },
});

const textStyles = stylex.create({
  body: {
    fontSize: 16,
  },
  headline: {
    fontSize: 40,
    fontFamily: "TrumpGothicPro",
    letterSpacing: 2,
    textShadow: "1px 1px 1px rgba(0,0,0,1)",
  },
  menu: {
    fontSize: 18,
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

const textColorStyles = stylex.create({
  primary: {
    color: "white",
  },
  accent: {
    color: "#e9dcbe",
  },
  headline: {
    color: "#CCCCCC",
  },
});
