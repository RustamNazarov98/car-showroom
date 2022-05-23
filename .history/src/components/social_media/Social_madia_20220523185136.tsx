import Twitter from '../../icons/Twitter.svg';
import {Social_madiaProps} from './Social_media.props';


export const Social_madia = (props:Social_madiaProps) => {
    return (
        <div>
            <a href="https://twitter.com/?lang=ru">
                {props.icons}
                <img src={Twitter} alt="" />
            </a>
        </div>
    );
}