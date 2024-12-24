import React, {
  useMemo,
  useRef,
  ReactNode,
  forwardRef,
  ComponentProps,
  useState,
  useEffect,
} from "react";
import * as stylex from "@stylexjs/stylex";
import useHoverable from "./useHoverable";

import XIVHoverRendererContext from "./XIVHoverRendererContext";

interface ChildrenArgs {
  isHovered: boolean;
  hoverRef: React.RefObject<HTMLElement | null>;
}

interface Props<THoverable extends React.ElementType> {
  children: ({ isHovered, hoverRef }: ChildrenArgs) => ReactNode;
  hoverItem: THoverable;
  hoverItemProps: ComponentProps<THoverable>;
}

export default function XIVHoverRenderer<
  THoverable extends React.ElementType
>({
  children,
  hoverItem: HoverItem,
  hoverItemProps,
}: Props<THoverable>) {
  const hoverRef = useRef<HTMLDivElement>(null);
  const renderedHoverRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, dynamicHoverStyles] = useHoverable(
    hoverRef,
    renderedHoverRef
  );

  const contextValue = useMemo(() => {
    return {
      isHovered: isHovered,
    };
  }, [isHovered]);

  return (
    <XIVHoverRendererContext.Provider value={contextValue}>
      <div {...stylex.props(styles.hoverContainer)}>
        {isHovered && (
          <div
            {...stylex.props([
              styles.defaultHover,
              dynamicHoverStyles,
            ])}
            ref={renderedHoverRef}
          >
            <HoverItem {...hoverItemProps} />
          </div>
        )}
        <div ref={hoverRef}>
          {/* {children({ isHovered, hoverRef })} */}
        </div>
      </div>
    </XIVHoverRendererContext.Provider>
  );
}

const styles = stylex.create({
  defaultHover: {
    position: "absolute",
  },
  hoverContainer: {
    position: "relative",
  },
});
