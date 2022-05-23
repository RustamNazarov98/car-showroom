import {CardProps} from './Card.props';
import classnames from 'classnames';
import styles from './Card.module.scss';

export const Card = (props:CardProps) => {
    return(
        <div>
            <img src={props.icon} alt="" />
            <span>{props.text}</span>
            <p></p>
        </div>
    );
}