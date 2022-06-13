import {SelectProps} from './Select.props';
import styles from './Select.module.scss';

const Select = ({name,form,options,placeholder,onChange=() => {} }:SelectProps) => {
    return(
        <select
            name={name}
            id={name}
            form={form}
            className={styles.select}
            placeholder={placeholder}
            onChange={e => onChange(name, e.target.value) }
        >
            {options.map((item,index) => (
                <option value={item.id ? item.id : item.name} key={index}>{item.name}</option>
            ))}
        </select>
    );
};

export default Select;
