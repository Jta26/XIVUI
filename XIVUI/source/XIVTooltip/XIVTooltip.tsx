import React, { useCallback, useRef } from "react";

import * as stylex from "@stylexjs/stylex";
import { XIVHoverRenderer } from "../shared/XIVHoverRenderer";
import XIVTooltipImpl from "./XIVTooltipImpl";

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
  return (
    <XIVHoverRenderer
      hoverItemProps={{ label }}
      hoverItem={XIVTooltipImpl}
    >
      {({ isHovered, hoverRef }) => {
        return children;
      }}
    </XIVHoverRenderer>
  );
}
