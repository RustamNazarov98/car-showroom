import {NavigationProps} from './Navigation.props';
import classnames from "classnames";


export const Navigation = (props:NavigationProps) => {
    return(
        <nav >
            {props.text}
        </nav>
    );
}