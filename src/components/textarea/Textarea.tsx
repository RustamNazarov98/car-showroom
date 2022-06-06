import {TextareaProps} from './Textarea.props';
import styles from './Textarea.module.scss';

const Textarea = ({value,placeholder,onChange,cols,rows }:TextareaProps) => {
    return(
        <textarea
            className={styles.textarea}
            value={value}
            name='text'
            rows={rows}
            cols={cols}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
export default Textarea;
