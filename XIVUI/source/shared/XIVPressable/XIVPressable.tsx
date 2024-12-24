import React, { MouseEventHandler, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

interface Props {
  children: ReactNode;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onPress?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  xstyle?: stylex.StaticStyles;
}

// TODO
// 1. links
export default function XIVPressable({
  children,
  onHoverStart,
  onHoverEnd,
  onPress,
  disabled,
  xstyle,
}: Props) {
  return (
    <button
      onClick={onPress}
      {...stylex.props([styles.container, xstyle])}
    >
      {children}
    </button>
  );
}

const styles = stylex.create({
  container: {
    border: "none",
    background: "none",
    cursor: "pointer",
  },
});
