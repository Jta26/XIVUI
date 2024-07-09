import React, { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

interface Props {
  children: ReactNode;
}

export default function XIVUICard({ children }: Props) {
  return <div {...stylex.props(styles.card)}>{children}</div>;
}

const styles = stylex.create({
  card: {
    minWidth: 400,
    borderWidth: 3,
    borderColor: "gold",
    borderRadius: 20,
    borderStyle: "solid",
    minHeight: 400,
    padding: 20,
  },
});
