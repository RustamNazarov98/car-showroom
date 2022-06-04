import React from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/images/main_logo.png';
import {Button} from "../index";

const Header = () => {
    const {
        header,
        header_inner,
        logo,
        image_wrapper,
        btns,
    } = styles

    return (
        <header className={header}>
                <div className={header_inner}>
                    <div className={logo}>
                        <div className={image_wrapper}>
                            <img src={Logo} alt="logo"/>
                        </div>
                    </div>
                    <div className={btns}>
                            <Button
                                color={'blue'}
                                text={'Добавить обьявление'}
                                onClick={() => console.log('hello')}
                            />
                            <Button
                                color={'blue'}
                                text={'Регистрация'}
                                onClick={() => console.log('hello')}
                            />
                    </div>
                </div>
        </header>
    );
};

export default Header;
