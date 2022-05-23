import {NavigationProps} from './Navigation.props';


export const Navigation = (props:NavigationProps) => {
    return(
        <nav>
            {props.text}
        </nav>
    );
}