import {NavigationProps} from './Navigation.props';
import classnames from "classnames";
import style from "./Navigation.module.scss";

export const Navigation = (props:NavigationProps) => {
    return(
        <div 
        className={classnames(style.)}>
            {props.text}
            <img src={props.icon}/>
        </div>
    );
}