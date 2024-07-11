import React, { ReactNode } from "react";

import * as stylex from "@stylexjs/stylex";

interface Props {
  children: ReactNode[] | ReactNode;
  label: string;
}

export default function Example({ children, label }: Props) {
  return (
    <>
      <div {...stylex.props(styles.example)}>
        <div {...stylex.props(styles.label)}>
          <h3>{label}</h3>
        </div>
        <div {...stylex.props(styles.childContainer)}>
          {Array.isArray(children) ? (
            children.map((child, index) => {
              return (
                <div
                  key={`xivui-example-${label}-${index}`}
                  {...stylex.props(styles.child)}
                >
                  {child}
                </div>
              );
            })
          ) : (
            <div {...stylex.props(styles.child)}>{children}</div>
          )}
        </div>
      </div>
      <div {...stylex.props(styles.divider)} />
    </>
  );
}

const styles = stylex.create({
  example: {
    display: "flex",
    justifyItems: "flex-start",
  },
  childContainer: {
    display: "flex",
  },
  child: {
    margin: 10,
  },
  label: {
    marginInlineEnd: 50,
  },
  divider: {
    height: 1,
    width: "100%",
    borderTopColor: "white",
    borderTopWidth: 2,
    borderTopStyle: "solid",
    marginBlock: 25,
  },
});