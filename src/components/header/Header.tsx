import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/images/main_logo.png';
import {Button} from "../index";
import {Link, useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {UseTypedSelector} from "../../hooks/useTypedSelector";

const Header = () => {
    const navigate = useNavigate();
    const {showModal} = useActions();

    const {
        header,
        header_inner,
        logo,
        image_wrapper,
        btns,
    } = styles;

    const {logoutUser} = useActions();
    const {login} = UseTypedSelector(state => state.login);

    const handleLinkToAdd = () => {
        navigate("/publication/add", { replace: true });
    };

    const handleLogin = () => {
        showModal()
    }

    const handleLogout = () => {
        logoutUser()
    }


    return (
        <header className={header}>
                <div className={header_inner}>
                    <div className={logo}>
                        <div className={image_wrapper}>
                            <Link to='/'>
                                <img src={Logo} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className={btns}>
                        {
                            !login
                                ?
                                <Button
                                    color={'gray'}
                                    text={'Войти'}
                                    onClick={handleLogin}
                                />
                                :
                                <>
                                    <Button
                                        color={'blue'}
                                        text={'Добавить обьявление'}
                                        onClick={handleLinkToAdd}
                                    />
                                    <Button
                                        color={'gray'}
                                        text={'Выйти'}
                                        onClick={handleLogout}
                                    />
                                </>
                        }

                    </div>
                </div>
        </header>
    );
};

export default Header;
