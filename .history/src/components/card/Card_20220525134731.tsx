import {CardProps} from './Card.props';
import styles from './Card.module.scss';
import Car from '../../img/card_picture.svg';

export const Card = (props:CardProps) => {
    return(
        <div>
            <img className={styles.car} src={Car} />
            <p className={styles.p}>{props.name}</p>
            <p>{props.year}</p>
            <p>{props.description}</p>
            <p>{props.color}</p>
            <p>{props.price}</p>
            <p>{props.phone}</p>
            <p>{props.engineCapacity}</p>

        </div>
    );
}