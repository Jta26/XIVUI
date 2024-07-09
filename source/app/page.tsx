"use client";
import * as stylex from "@stylexjs/stylex";
import XIVButton from "../components/XIVButton";
import XIVCard from "../components/XIVCard";
import XIVUIText, { XIVTextStyle } from "../components/XIVText/XIVText";

const styles = stylex.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    minWidth: 400,
    backgroundColor: "#303030",
    display: "flex",
    padding: 20,
    flexDirection: "column",
  },
  example: {
    marginBlockStart: 100,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.container)}>
        <h1> XIVUI</h1>
        <div {...stylex.props(styles.example)}>
          <h3>Button</h3>
          <XIVButton label="Default" disabled={false} onClick={() => {}} />
          <XIVButton label="Apply" disabled={false} onClick={() => {}} />
          <XIVButton label="Close" disabled={false} onClick={() => {}} />
        </div>
        <div {...stylex.props(styles.example)}>
          <h3>Text</h3>
          <XIVUIText textStyle={XIVTextStyle.hero}>Hero Text</XIVUIText>
          <XIVUIText textStyle={XIVTextStyle.headline}>Headline Text</XIVUIText>
          <XIVUIText textStyle={XIVTextStyle.body}>Body Text</XIVUIText>
        </div>
        <div {...stylex.props(styles.example)}>
          <h3>Card</h3>
          <XIVCard>
            <XIVButton label="Card Button" />
          </XIVCard>
        </div>
      </div>
    </main>
  );
}
