import style from './PageTitle.module.scss';
import {PageTitleProps} from './PageTitle.props';
import classnames from 'classnames';

export const PageTitle = (props:PageTitleProps) => {
    return(
        <div>
            <h1
                className={classnames(style.title)}
            >
                {props.text}</h1>
        </div>
    );
}