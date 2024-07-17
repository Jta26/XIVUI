import React, { MouseEventHandler, ReactNode, useCallback } from "react";

import * as stylex from "@stylexjs/stylex";

interface Props {
  disabled?: boolean;
  item?: ReactNode;
}

export default function XIVActionButton({ disabled, item }: Props) {
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const onMouseDown = useCallback<MouseEventHandler<HTMLDivElement>>(
    (event) => {
      setIsMouseDown(true);
    },
    [setIsMouseDown]
  );
  const onMouseUp = useCallback<MouseEventHandler<HTMLDivElement>>(
    (event) => {
      setIsMouseDown(false);
    },
    [setIsMouseDown]
  );
  const onAnimationEnd = useCallback(() => {
    setIsMouseDown(false);
  }, [setIsMouseDown]);

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onAnimationEnd={onAnimationEnd}
      {...stylex.props([styles.container, styles.topInsetShadow])}
    >
      <div
        {...stylex.props([styles.overlay, isMouseDown && styles.mouseDownGlow])}
      ></div>
    </div>
  );
}

// This should be a circle that expands and quickly becomes opaque and not a shadow
const mouseDownGlow = stylex.keyframes({
  "0%": {
    opacity: 1,
    boxShadow: "0 0 2px 4px #E8E8DF",
  },
  "100%": {
    opacity: ".25",
    boxShadow: "0 0 20px 20px #E8E8DF",
  },
});

const styles = stylex.create({
  container: {
    border: "none",
    background: "none",
    width: 40,
    height: 40,
    boxSizing: "border-box",
    position: "relative",
    // overflow: "hidden",
    borderRadius: 5,
    "::before": {
      height: "20%",
      width: "100%",
      background:
        "linear-gradient(to bottom,rgba(255,255,255,.6) 0%,rgba(255,255,255,.15) 100%)",
      top: 0,
      borderRadius: 5,
      left: 0,
      position: "absolute",
      content: " ",
      // background:
      //   "-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(255,255,255,.6)),color-stop(100%,rgba(255,255,255,.15)))",
    },
  },
  topInsetShadow: {
    boxShadow: {
      default: "0 0 2px 1px black",
      ":hover": "0 0 1px 3px #FFF8CB",
    },
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    boxShadow: {
      ":hover": "0 0 5px 3px #FFF8CB",
    },
  },
  mouseDownGlow: {
    "::after": {
      animationName: mouseDownGlow,
      animationDuration: ".5s",
      content: "",
      position: "absolute",
      top: "calc(50% - 3px)",
      backgroundColor: "#FFF8CB",
      left: "calc(50% - 3px)",
      width: "6px",
      height: "6px",
      borderRadius: "100%",
    },
  },
});
