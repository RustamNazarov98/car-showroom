import {InputProps} from './Input.props';
import styles from './Input.module.scss';

export const Input = ({value,placeholder,onChange,objKey,type='text' }:InputProps) => {
    return(
        <input
            className={styles.input}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(typeof objKey === "string" ? objKey : '', e.target.value)}
        />
    );
}
