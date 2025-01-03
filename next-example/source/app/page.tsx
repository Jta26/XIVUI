"use client";

import * as stylex from "@stylexjs/stylex";
import { XIVButton } from "xivui";
import { XIVCard } from "xivui";
import { XIVText } from "xivui";
import { XIVTextStyle } from "xivui";
import { XIVActionButton } from "xivui";
import { XIVTitleText } from "xivui";
import Example from "./example";
import { XIVTooltip } from "xivui";
import { XIVCircleButton } from "xivui";
import { XIVTextColor } from "xivui";
import { XIVMenu } from "xivui";
import { XIVMenuItem } from "xivui";
import { XIVAction } from "xivui";

export default function Home() {
  return (
    <main {...stylex.props(styles.main)}>
      <XIVCard xstyle={styles.container}>
        <div {...stylex.props(styles.title)}>
          <XIVTitleText> XIVUI</XIVTitleText>
        </div>
        <Example label="Button">
          <XIVButton
            label="Default"
            disabled={false}
            onClick={() => {}}
          />
          <XIVButton
            label="Apply"
            disabled={true}
            onClick={() => {}}
          />
          <XIVButton
            label="Close"
            disabled={false}
            onClick={() => {}}
          />
        </Example>
        <Example label="Text">
          <XIVText textStyle={XIVTextStyle.headline}>
            Character
          </XIVText>
          <XIVText textStyle={XIVTextStyle.body}>
            Body Text
          </XIVText>
        </Example>
        <Example label="Title Text">
          <XIVTitleText>Black Mage</XIVTitleText>
        </Example>
        <Example label="Card">
          <XIVCard contentXStyle={cardStyles.card}>
            <div {...stylex.props(cardStyles.cardContent)}>
              <XIVText
                textStyle={XIVTextStyle.headline}
                textColor={XIVTextColor.headline}
              >
                Character
              </XIVText>
              <div {...stylex.props(cardStyles.buttonRow)}>
                <XIVButton label="Default" />
                <div {...stylex.props(cardStyles.last)}>
                  <XIVButton
                    xstyle={cardStyles.button}
                    label="Apply"
                  />
                  <XIVButton label="Close" />
                </div>
              </div>
            </div>
          </XIVCard>
        </Example>
        <Example label="Action Button">
          <XIVActionButton action={XIVAction.ten} />
          <XIVActionButton action={XIVAction.chi} />
        </Example>
        <Example label="Circle Button">
          <XIVCircleButton />
        </Example>
        <Example label="Tooltip">
          <XIVTooltip label="Join Novice Network">
            <XIVActionButton action={XIVAction.jin} />
          </XIVTooltip>
          <XIVTooltip label="Or Don't">
            <XIVButton label="Press Me" />
          </XIVTooltip>
        </Example>
        <Example label="Menu">
          <XIVMenu>
            <XIVMenuItem label="Edit Portrait" />
            <XIVTooltip label="The Giving Land">
              <XIVMenuItem label="Edit Plate Design" />
            </XIVTooltip>
            <XIVMenuItem label="Edit Profile" />
            <XIVMenuItem label="Edit Search Comment" />
            <XIVMenuItem label="Privacy Settings" />
            <XIVMenuItem label="Help" />
          </XIVMenu>
        </Example>
      </XIVCard>
    </main>
  );
}

const styles = stylex.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginBlockStart: 50,
  },
  container: {
    width: "80%",
    minWidth: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  example: {
    marginBlockStart: 100,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    marginBlock: 20,
  },
});

const cardStyles = stylex.create({
  card: {
    maxWidth: "100%",
    height: 400,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },
  buttonRow: {
    minWidth: 600,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  last: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginInlineStart: "auto",
  },
  button: {
    marginInlineEnd: 15,
  },
});
