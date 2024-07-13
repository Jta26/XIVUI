import React, { MouseEventHandler } from "react";
import * as stylex from "@stylexjs/stylex";
import XIVText from "../XIVText";
import { XIVTextStyle } from "../XIVText";

interface Props {
  label: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  xstyle?: stylex.StaticStyles;
}

export default function XIVButton({ label, disabled, onClick, xstyle }: Props) {
  return (
    <button
      {...stylex.props([
        styles.button,
        !disabled && styles.pressable,
        disabled && styles.disabled,
        xstyle,
      ])}
      disabled={disabled}
      onClick={onClick}
    >
      <XIVText textAlign="center" textStyle={XIVTextStyle.body}>
        {label}
      </XIVText>
    </button>
  );
}

const styles = stylex.create({
  button: {
    paddingBlock: 2,
    borderRadius: 30,
    minWidth: 150,
    border: "none",
    background:
      "linear-gradient(180deg, #636363 0%, #4B4B4B 45%, #373737 55%, #454545 100%)",
    boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  },
  pressable: {
    filter: {
      default: "none",
      ":hover": "brightness(1.2)",
    },
    transform: {
      default: "none",
      ":active": "translateY(2px)",
    },
  },
  disabled: {
    filter: {
      default: "none",
      ":disabled": "brightness(.65)",
    },
    // background:
    //   "linear-gradient(180deg, #454545 0%, #494949 45%, #373737 55%, #303030 100%)",
  },
});
