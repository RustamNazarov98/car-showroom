import {CardProps} from './Card.props';
import classnames from 'classnames';
import styles from './Card.module.scss';
import Car from '../../img/card_picture.svg';

export const Card = (props:CardProps) => {
    return(
        <div>
            <img src={Car} />
            <p className={classnames(styles.description)}>{props.text}</p>
            <p className={classnames(styles.description)}>{props.text}</p>
        </div>
    );
}