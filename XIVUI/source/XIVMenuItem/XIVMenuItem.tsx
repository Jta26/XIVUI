import React, {
  useCallback,
  MouseEventHandler,
  MouseEvent,
} from "react";
import * as stylex from "@stylexjs/stylex";

import XIVText from "../XIVText";
import { XIVTextColor, XIVTextStyle } from "../XIVText/XIVText";
import XIVPressable from "../shared/XIVPressable/XIVPressable";

interface Props {
  label: string;
}

export default function XIVMenuItem({ label }: Props) {
  const onPress: MouseEventHandler<HTMLElement> = useCallback(
    (e: MouseEvent) => {
      console.log("menu item pressed");
    },
    []
  );

  return (
    <XIVPressable onPress={onPress}>
      <div {...stylex.props(styles.container)}>
        <XIVText
          textStyle={XIVTextStyle.menu}
          textColor={XIVTextColor.accent}
        >
          {label}
        </XIVText>
      </div>
    </XIVPressable>
  );
}

const styles = stylex.create({
  container: {
    paddingInlineStart: 10,
    borderRadius: 20,
    ":hover": {
      background:
        "linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
    },
  },
});
