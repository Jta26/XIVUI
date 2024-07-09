import React, { MouseEventHandler } from "react";
import stylex from '@stylexjs/stylex';

interface Props {
  label: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function XIVButton({ label, disabled, onClick }: Props) {
  return (
    <button {...stylex.props(styles.button)} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

const styles = stylex.create({
  button: {
    fontFamily:'meiryo',fontSize: 14,
    paddingInline: 50,
    paddingBlock: 2,
    borderRadius: 30,
    border: 'none',
    background: 'linear-gradient(180deg, #5B5B5B 0%, #4B4B4B 45%, #373737 55%, #454545 100%)',
    boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.75)',
    filter: {
      default: 'none',
      ':hover': 'brightness(1.2)'
    },
    transform: {
      default: 'none',
      ':active': 'translateY(2px)'
    }
  }
})