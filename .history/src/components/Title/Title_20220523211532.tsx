import style from './Title.module.scss';
import {TitleProps} from './Title.props'
export const Title = (props:TitleProps) => {
    return(
        <div>
            <h1>{props.text}</h1>
        </div>
    );
}