import react from "react";
import * as stylex from "@stylexjs/stylex";

import XIVText from "../XIVText";
import { XIVTextColor, XIVTextStyle } from "../XIVText/XIVText";

interface Props {
  label: string;
}

export default function XIVMenuItem({ label }: Props) {
  return (
    <div {...stylex.props(styles.container)}>
      <XIVText textStyle={XIVTextStyle.menu} textColor={XIVTextColor.accent}>
        {label}
      </XIVText>
    </div>
  );
}

const styles = stylex.create({
  container: {
    paddingInlineStart: 10,
    borderRadius: 20,
    ":hover": {
      background:
        "linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
    },
  },
});
