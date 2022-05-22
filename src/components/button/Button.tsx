import { ButtonProps } from './Button.props';

import styles from './Button.module.scss';

export const Button = (props: ButtonProps) => {
    return (
        <button className={props.color + styles.button} >
            {props.text}
        </button>
    )
}
