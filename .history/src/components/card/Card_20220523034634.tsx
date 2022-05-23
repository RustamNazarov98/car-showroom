import {CardProps} from './Card.props';
import classnames from 'classnames';
import styles from './Card.module.scss';
import Car from '../../img/card_picture.svg';

export const Card = (props:CardProps) => {
    return(
        <div>
            <img src={Car} alt="" />
            <span>{props.text}</span>
            <p>{props.text}</p>
        </div>
    );
}