import react from "react";
import * as stylex from "@stylexjs/stylex";

import XIVText, { XIVTextStyle } from "../XIVText";

interface Props {
  children: react.ReactNode;
  isHovered: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

// This is where the tooltip content gets rendered.
// XIVTooltip.tsx is the API that is used to render tooltips
export default function XIVTooltipImpl({
  children,
  isHovered,
  ref,
}: Props) {
  return (
    <div
      {...stylex.props([
        styles.tooltipContainer,
        isHovered && styles.showTooltip,
      ])}
      ref={ref}
    >
      <XIVText
        xstyle={styles.tooltipText}
        textAlign="center"
        textStyle={XIVTextStyle.body}
      >
        {children}
      </XIVText>
    </div>
  );
}

const styles = stylex.create({
  tooltipContainer: {
    backgroundColor: "rbga(0,0,0, 1)",
    border: "1px solid black",
    position: "absolute",
    visibility: "hidden",
    width: 250,
  },
  showTooltip: {
    visibility: "shown",
  },
  tooltipText: {
    textAlign: "center",
  },
});
