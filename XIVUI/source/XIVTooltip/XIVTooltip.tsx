import React, { useCallback, useRef } from "react";

import * as stylex from "@stylexjs/stylex";
import { XIVHoverRenderer } from "../shared/HoverRenderer";

interface Props {
  children: React.ReactNode;
  label: string;
  xstyle?: stylex.StaticStyles;
}

export default function XIVTooltip({
  children,
  label,
  xstyle,
}: Props) {
  const hoverRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  return (
    <div {...stylex.props(styles.container)}>
      <XIVHoverRenderer>
        <div ref={hoverRef}>{children}</div>
      </XIVHoverRenderer>
    </div>
  );
}

const styles = stylex.create({
  container: {
    position: "relative",
  },
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