import {SelectProps} from './Select.props';
import styles from './Select.module.scss';

const Select = ({name,form,options,placeholder }:SelectProps) => {
    return(
        <select
            name={name}
            id={name}
            form={form}
            className={styles.select}
            placeholder={placeholder}
        >
            {options.map((item,index) => (
                <option value={item.value} key={index}>{item.value}</option>
            ))}
        </select>
    );
};

export default Select;
