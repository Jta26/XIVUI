import react, { useEffect, useRef, useState } from "react";

import * as stylex from "@stylexjs/stylex";

import type { StyleXStyles } from "@stylexjs/stylex";

// TODO
// 1. handle contextual layering (ensure hovers are always on top)
export default function useHoverable(
  hoverRef: React.RefObject<HTMLElement | null>,
  renderedHoverRef: React.RefObject<HTMLElement | null>
): [boolean, StyleXStyles | null] {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (hoverRef.current == null) {
      return;
    }

    const hoverElement = hoverRef.current;

    const onMouseEnter = () => {
      setIsHovered(true);
    };
    const onMouseLeave = () => {
      setIsHovered(false);
      setHoverPosition(null);
    };
    hoverElement.addEventListener("mouseenter", onMouseEnter);
    hoverElement.addEventListener("mouseleave", onMouseLeave);
    return () => {
      hoverElement.removeEventListener(
        "mouseenter",
        onMouseEnter
      );
      hoverElement.removeEventListener(
        "mouseleave",
        onMouseLeave
      );
    };
  }, [hoverRef, renderedHoverRef, setIsHovered]);

  useEffect(() => {
    if (isHovered) {
      const hoverPos = getHoverPosition(
        hoverRef,
        renderedHoverRef
      );
      if (hoverPos != null) {
        setHoverPosition(hoverPos);
      }
    }
  }, [isHovered, hoverRef, renderedHoverRef]);

  if (hoverPosition != null) {
    return [
      isHovered,
      styles.topAlign(hoverPosition.y, hoverPosition.x),
    ];
  }

  return [isHovered, null];
}

function getHoverPosition(
  hoverRef: React.RefObject<HTMLElement | null>,
  renderedHoverRef: React.RefObject<HTMLElement | null>
): { x: number; y: number } | null {
  const hoverElement = hoverRef.current;
  const renderElement = renderedHoverRef.current;

  if (hoverElement == null || renderElement == null) {
    return null;
  }

  const hoverRect = hoverElement.getBoundingClientRect();
  const renderRect = renderElement.getBoundingClientRect();

  const hoverMidpoint = hoverRect.width / 2;
  const renderMidpoint = renderRect.width / 2;

  const hoverX = hoverMidpoint - renderMidpoint;
  const hoverY = -hoverRect.height;

  return {
    x: hoverX,
    y: hoverY,
  };
}

const styles = stylex.create({
  topAlign: (top: number, left: number) => ({
    top,
    left,
  }),
});
