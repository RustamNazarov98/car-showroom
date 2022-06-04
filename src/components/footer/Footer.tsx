import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../assets/images/main_logo.png';
import {SocialMedia} from "../index";
import Twitter from '../../assets/images/twitter.svg';
import LinkedIn from '../../assets/images/linkedIn.svg';
import Insta from '../../assets/images/insta.svg';
import Facebook from '../../assets/images/fb.svg';
import {Link} from "react-router-dom";

const Footer = () => {
    const {
        footer,
        columns,
        column,
        image_wrapper,
        icons
    } = styles
    return (
        <footer className={footer}>
            <div className="container">
                <div className={columns}>
                    <div className={column}>
                        <div className={image_wrapper}>
                            <img src={Logo} alt="logo"/>
                        </div>
                    </div>
                    <div className={column}>
                        <Link to={'/about'}>О нас</Link>
                    </div>
                    <div className={column}>
                        <Link to={'/privacy'}>Условия и положения</Link>
                    </div>
                    <div className={column}>
                        <Link to={'/privacy'}>Политика <br/> конфидециальности</Link>
                    </div>
                </div>
                <div className={icons}>
                    <SocialMedia icon={Twitter} link={'https://twitter.com/'}/>
                    <SocialMedia icon={LinkedIn} link={'https://www.linkedin.com/'}/>
                    <SocialMedia icon={Insta} link={'https://www.instagram.com/'}/>
                    <SocialMedia icon={Facebook} link={'https://facebook.com/'}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
