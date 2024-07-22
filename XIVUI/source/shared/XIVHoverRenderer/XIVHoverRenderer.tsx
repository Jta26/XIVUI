import react, {
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
  hoverRef: React.RefObject<HTMLElement>;
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
  const renderedHoverRef = useRef<HTMLDivElement>(null);
  const [isHovered] = useHoverable(hoverRef, renderedHoverRef);

  const contextValue = useMemo(() => {
    return {
      isHovered: isHovered,
    };
  }, [isHovered]);

  return (
    <XIVHoverRendererContext.Provider value={contextValue}>
      <div ref={hoverRef}>
        {children({ isHovered, hoverRef })}
      </div>
      <div ref={renderedHoverRef}>
        {isHovered && <HoverItem {...hoverItemProps} />}
      </div>
    </XIVHoverRendererContext.Provider>
  );
}
