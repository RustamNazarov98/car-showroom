import Twitter from '../../icons/Twitter.svg';
import {Social_madiaProps} from './Social_media.props';


export const Social_madia = (props:) => {
    return (
        <div>
            <a href="https://twitter.com/?lang=ru">
                <img src={Twitter} alt="" />
            </a>
        </div>
    );
}