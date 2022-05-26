import {InputProps} from './Input.props';
import classnames from 'classnames';
import styles from './Input.module.scss';
import { useState } from 'react';

export const Input = ({value,placeholder,onChange }:InputProps) => {
 
    return(
        <>
            <input
                className={classnames(styles.input)}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
             />
        </>
    );

}