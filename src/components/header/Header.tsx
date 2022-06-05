import React from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/images/main_logo.png';
import {Button} from "../index";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const {
        header,
        header_inner,
        logo,
        image_wrapper,
        btns,
    } = styles;


    const handleLinkToAdd = () => {
        navigate("/publication/add", { replace: true });
    };

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
                            <Button
                                color={'blue'}
                                text={'Добавить обьявление'}
                                onClick={handleLinkToAdd}
                            />
                            <Button
                                color={'gray'}
                                text={'Регистрация'}
                                onClick={() => console.log('hello')}
                            />
                    </div>
                </div>
        </header>
    );
};

export default Header;
