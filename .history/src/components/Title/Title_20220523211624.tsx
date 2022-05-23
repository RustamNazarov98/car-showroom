import style from './Title.module.scss';
import {TitleProps} from './Title.props';
import classnames from 'classnames';
export const Title = (props:TitleProps) => {
    return(
        <div>
            <h1
                className={classnames(style.title)}
            >{props.text}</h1>
        </div>
    );
}