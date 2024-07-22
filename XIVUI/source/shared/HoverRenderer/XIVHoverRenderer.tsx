import react, { useMemo } from "react";
import * as stylex from "@stylexjs/stylex";

import XIVHoverRendererContext from "./XIVHoverRendererContext";

interface Props {
  children: react.ReactNode;
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

export default function XIVHoverRenderer({ children }: Props) {
  const contextValue = useMemo(() => {
    return {};
  }, []);

  return (
    <XIVHoverRendererContext.Provider value={contextValue}>
      {children}
    </XIVHoverRendererContext.Provider>
  );
}
