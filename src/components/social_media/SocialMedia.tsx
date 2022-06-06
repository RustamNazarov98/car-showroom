import {SocialMediaProps} from './SocialMedia.props';
import styles from './SocialMedia.module.scss';

const SocialMedia = ({icon,link}:SocialMediaProps) => {
    return (
        <a href={link} className={styles.icon}>
            <img src={icon} alt="#" />
        </a>
    );
}
export default SocialMedia;
