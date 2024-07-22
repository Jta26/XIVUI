import react from "react";
import * as stylex from "@stylexjs/stylex";

interface Props {
  children: react.ReactNode;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onPress?: () => void;
  disabled?: boolean;
  xstyle?: stylex.StaticStyles;
}

export default function XIVPressable({
  children,
  onHoverStart,
  onHoverEnd,
  onPress,
  disabled,
  xstyle,
}: Props) {
  return (
    <button {...stylex.props([styles.container, xstyle])}>
      {children}
    </button>
  );
}

const styles = stylex.create({
  container: {
    border: "none",
    background: "none",
  },
});
