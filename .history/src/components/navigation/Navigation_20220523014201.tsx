import {NavigationProps} from './Navigation.props';
import classnames from "classnames";
import style from "./Navigation.module.scss";

export const Navigation = (props:NavigationProps) => {
    return(
        <nav 
        className={classnames(style.)}>
            {props.text}
        </nav>
    );
}