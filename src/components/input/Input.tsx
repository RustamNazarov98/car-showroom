import {InputProps} from './Input.props';
import styles from './Input.module.scss';

export const Input = ({value,placeholder,onChange }:InputProps) => {
 
    return(
        <input
            className={styles.input}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );

}
