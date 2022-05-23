import {InputProps} from './Input.props';
import classnames from 'classnames';
import styles from './Input.module.scss';

export const Input = (props:InputProps) => {
    return(
        <div>
            <input
                className={classnames(styles.input)}
                type="text"
                value="год"
                />
        </div>
    );

}