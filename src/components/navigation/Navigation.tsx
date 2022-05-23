import {NavigationProps} from './Navigation.props';
import classnames from "classnames";
import style from "./Navigation.module.scss";
import Arrow from "../../icons/arrow.svg"

export const Navigation = (props:NavigationProps) => {
    return(
        <div 
        className={classnames(style.navigation)}>
            {props.text}
            <img src={Arrow}/>
        </div>
    );
}