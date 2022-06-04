import React from 'react';
import {Link} from "react-router-dom";
import {NavbarProps} from './Navbar.props';
import classnames from "classnames";
import styles from "./Navbar.module.scss";
import Arrow from "../../assets/images/arrow.svg";

export const NavigationLink = ({text, link, active}:NavbarProps) => {

    const linkClass = classnames(styles.navigation, {
        [styles.active]: active,
    })

    return(
        <Link to={link}>
            <div
                className={linkClass}>
                <span> {text}</span>
                <img src={Arrow} alt='arrow'/>
            </div>
        </Link>
    );
}
