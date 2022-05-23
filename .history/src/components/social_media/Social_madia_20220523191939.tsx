
import {Social_madiaProps} from './Social_media.props';
import styles from './Social_media.module.scss';



export const Social_madia = (props:Social_madiaProps) => {
    console.log("ertyui")
        return (
        <div>
            <a href="https://twitter.com/?lang=ru">
                <img className={styles.img} src={props.img} alt="#" />
            </a>
        </div>
    );
}