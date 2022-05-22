import { ButtonProps } from "./Button.props";

import classnames from "classnames";

import styles from "./Button.module.scss";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button, {
        [styles.danger]: props.color === "red",
        [styles.primary]: props.color === "blue",
      })}
    >
      {props.text}
    </button>
  );
};
