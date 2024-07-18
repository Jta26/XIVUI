import react from "react";
import * as stylex from "@stylexjs/stylex";
import XIVCard from "../XIVCard";
import { XIVMenuItem } from "../XIVMenuItem";

interface Props {
  children: react.ReactNode;
}

export default function XIVMenu({ children }: Props) {
  return (
    <XIVCard xstyle={styles.container}>
      <div {...stylex.props(styles.container)}>{children}</div>
    </XIVCard>
  );
}

const styles = stylex.create({
  container: {
    margin: 5,
    minWidth: 200,
  },
});
