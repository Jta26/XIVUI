import React, { useCallback, useRef } from "react";

import * as stylex from "@stylexjs/stylex";
import XIVText from "../XIVText";
import { XIVTextStyle } from "../XIVText";

interface Props {
  children: React.ReactNode;
  label: string;
  xstyle?: stylex.StaticStyles;
}

export default function XIVTooltip({ children, label, xstyle }: Props) {
  const hoverRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = React.useState(false);
  const onHoverIn = useCallback(() => {
    // show tooltip
    determineTooltipPosition(hoverRef, tooltipRef);
    setIsHovered(true);
  }, [setIsHovered, hoverRef, tooltipRef]);

  const onHoverOut = useCallback(() => {
    // hide tooltip
    console.log("unhovered");
    setIsHovered(false);
  }, [setIsHovered]);

  return (
    <div {...stylex.props(styles.container)}>
      <div onMouseEnter={onHoverIn} onMouseLeave={onHoverOut} ref={hoverRef}>
        {children}
      </div>
      <div
        {...stylex.props([
          styles.tooltipContainer,
          isHovered && styles.showTooltip,
        ])}
        ref={tooltipRef}
      >
        <XIVText
          xstyle={styles.tooltipText}
          textAlign="center"
          textStyle={XIVTextStyle.body}
        >
          {label}
        </XIVText>
      </div>
    </div>
  );
}

function determineTooltipPosition(
  hoverRef: React.RefObject<HTMLElement>,
  tooltipRef: React.RefObject<HTMLElement>
) {
  // takes the position of the child element and the tooltip and determines where to place the tooltip

  const hoverElement = hoverRef.current;
  const tooltipElement = tooltipRef.current;
  if (hoverElement == null || tooltipElement == null) {
    return;
  }
  const hoverRect = hoverElement.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();
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
