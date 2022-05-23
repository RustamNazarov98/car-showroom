import Card_picture from '../../img/cars_img.svg';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';

export const Card = () => {
    return(
        <img src={Card_picture} />
    );
}