import "../../stylex_bundle.css";
import React from "react";
import stylex from '@stylexjs/stylex';
export default function XIVButton({
  label,
  disabled,
  onClick
}) {
  return <button {...{
    className: "x193ceg3 xif65rj xicac58 xj8oexa x174e0gf x1gs6z28 x174k6gc xaoc119 xkcp37y xlcqwk8 x1c071of x1sjarlb"
  }} disabled={disabled} onClick={onClick}>
      {label}
    </button>;
}