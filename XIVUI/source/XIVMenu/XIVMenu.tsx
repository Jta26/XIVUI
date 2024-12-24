import React, { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import XIVCard from "../XIVCard";
import { XIVMenuItem } from "../XIVMenuItem";

interface Props {
  children: ReactNode;
}

// TODO
// 1. Figure out how to make the edge fade on hover
// 2. Thumb arrow when tabbing through
// 3. figure out exact spacing between menu items and the edge of the menu
export default function XIVMenu({ children }: Props) {
  return (
    <XIVCard xstyle={styles.container}>
      <div {...stylex.props(styles.container)}>{children}</div>
    </XIVCard>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 5,
    minWidth: 200,
  },
});
