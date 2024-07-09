import "../../stylex_bundle.css";
import React from "react";
import * as stylex from "@stylexjs/stylex";
export let XIVUITextStyle = /*#__PURE__*/function (XIVUITextStyle) {
  XIVUITextStyle[XIVUITextStyle["body"] = 0] = "body";
  XIVUITextStyle[XIVUITextStyle["headline"] = 1] = "headline";
  XIVUITextStyle[XIVUITextStyle["hero"] = 2] = "hero";
  return XIVUITextStyle;
}({});
export default function XIVUIText({
  children,
  textStyle = XIVUITextStyle.body
}) {
  switch (textStyle) {
    case XIVUITextStyle.body:
      return <p {...{
        className: "x193ceg3 xif65rj"
      }}>{children}</p>;
    case XIVUITextStyle.headline:
      return <h1 {...{
        className: "x193ceg3 xosj86m"
      }}>
          {children}
        </h1>;
    case XIVUITextStyle.hero:
      return <h1 {...{
        className: "x193ceg3 x1ewwscv"
      }}>{children}</h1>;
  }
}