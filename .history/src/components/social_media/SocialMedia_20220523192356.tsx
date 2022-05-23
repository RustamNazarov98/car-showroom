
import {Social_madiaProps} from './Social_media.props';
import styles from './Social_media.module.scss';



export const SocialMedia = (props:Social_madiaProps) => {
        return (
        <div>
            <a href="https://twitter.com/?lang=ru">
                <img className={styles.img} src={props.img} alt="#" />
            </a>
        </div>
    );
}