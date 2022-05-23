
import {Social_madiaProps} from './Social_media.props';


export const Social_madia = (props:Social_madiaProps) => {
    return (
        <div>
            <a href="https://twitter.com/?lang=ru">
                <img src={props.img} alt="#" />
            </a>
        </div>
    );
}