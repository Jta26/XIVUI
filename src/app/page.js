"use client";

import "../stylex_bundle.css";
import * as stylex from "@stylexjs/stylex";
import XIVButton from "../components/XIVButton";
import XIVCard from "../components/XIVCard";
import XIVUIText, { XIVUITextStyle } from "../components/XIVText/XIVUIText";
export default function Home() {
  return <main {...{
    className: "x78zum5 xl56j7k x6s0dn4"
  }}>
      <div {...{
      className: "xktia5q x13o0s5z x1yi8jrw x78zum5 x1qhigcl xdt5ytf"
    }}>
        <h1> XIVUI</h1>
        <div {...{
        className: "xb8qb8r x78zum5 xaw8158 x6s0dn4 x1q0g3np x1a02dak"
      }}>
          <h3>Button</h3>
          <XIVButton label="Default" disabled={false} onClick={() => {}} />
          <XIVButton label="Apply" disabled={false} onClick={() => {}} />
          <XIVButton label="Close" disabled={false} onClick={() => {}} />
        </div>
        <div {...{
        className: "xb8qb8r x78zum5 xaw8158 x6s0dn4 x1q0g3np x1a02dak"
      }}>
          <h3>Text</h3>
          <XIVUIText textStyle={XIVUITextStyle.hero}>Hero Text</XIVUIText>
          <XIVUIText textStyle={XIVUITextStyle.headline}>
            Headline Text
          </XIVUIText>
          <XIVUIText textStyle={XIVUITextStyle.body}>Body Text</XIVUIText>
        </div>
        <div {...{
        className: "xb8qb8r x78zum5 xaw8158 x6s0dn4 x1q0g3np x1a02dak"
      }}>
          <h3>Card</h3>
          <XIVCard>
            <XIVButton label="Card Button" />
          </XIVCard>
        </div>
      </div>
    </main>;
}