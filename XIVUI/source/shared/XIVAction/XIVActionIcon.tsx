import React, { useMemo } from "react";
import * as stylex from "@stylexjs/stylex";

import { XIVAction } from "./XIVAction";

function formatActionUrl(action: XIVAction): string {
  return `/actions/${action}`;
}

interface Props {
  action: XIVAction;
}

export default function XIVActionIcon({ action }: Props) {
  const url = useMemo(() => formatActionUrl(action), [action]);
  return (
    <div
      {...stylex.props(styles.action, styles.background(url))}
    ></div>
  );
}

const styles = stylex.create({
  background: (url: string) => ({
    backgroundImage: `url(${url})`,
    objectFit: "cover",
    backgroundPosition: "center",
    backgroundSize: "100%",
  }),
  action: {
    width: 40,
    height: 40,
  },
});
