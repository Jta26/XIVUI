import react, { useContext } from "react";
import * as stylex from "@stylexjs/stylex";
import { XIVHoverRendererContext } from "../shared/XIVHoverRenderer";

import XIVText, { XIVTextStyle } from "../XIVText";

export interface Props {
  label: string;
}

// This is where the tooltip content gets rendered.
// XIVTooltip.tsx is the API that is used to render tooltips
export default function XIVTooltipImpl({ label }: Props) {
  const { isHovered } = useContext(XIVHoverRendererContext);

  return (
    <div {...stylex.props([styles.tooltipContainer])}>
      <XIVText
        textAlign="center"
        textStyle={XIVTextStyle.body}
        xstyle={styles.tooltipText}
      >
        {label}
      </XIVText>
    </div>
  );
}

const styles = stylex.create({
  tooltipContainer: {
    // border: "1px solid black",
    backgroundColor: "rgba(0,0,0,.15)",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
    borderRadius: 10,
    paddingInline: 10,
    maxWidth: 250,
  },
  tooltipText: {
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});
