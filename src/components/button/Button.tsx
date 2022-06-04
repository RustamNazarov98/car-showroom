import { ButtonProps } from "./Button.props";
import styles from './Button.module.scss';
import classnames from "classnames";


const Button = ({color, text, onClick}: ButtonProps) => {

  const btnClass = classnames(styles.button, {
      [styles.danger]: color === "red",
      [styles.transparent]: color === "gray",
      [styles.primary]: color === "blue",
  })

  return (
    <button className={btnClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
