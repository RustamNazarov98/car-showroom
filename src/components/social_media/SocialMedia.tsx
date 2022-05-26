
import {SocialMediaProps} from './SocialMedia.props';
import styles from './SocialMedia.module.scss';



export const SocialMedia = (props:SocialMediaProps) => {
        return (
        <div>
            <a href="https://twitter.com/?lang=ru">
                <img className={styles.img} src={props.img} alt="#" />
            </a>
        </div>
    );
}