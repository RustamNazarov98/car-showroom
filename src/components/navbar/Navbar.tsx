import React, {useEffect} from 'react';
import styles from './Navbar.module.scss';
import {NavigationLink} from "./NavigationLink";
import {useActions} from "../../hooks/useActions";
import {UseTypedSelector} from "../../hooks/useTypedSelector";

const Navbar = () => {
    const {
        navbar,
        links,
        link
    } = styles

    const linksArray = [
        {
            text: 'Поиск',
            link: '/',
            active: true,
        },
        {
            text: 'Автомобили',
            link: '/cars',
            active: false,
        },
        {
            text: 'Запчасти',
            link: '/spare-parts',
            active: false,
        },
        {
            text: 'Услуги',
            link: '/services',
            active: false,
        }
    ]

    const {login} = UseTypedSelector(state => state.login);

    return (
        <nav className={navbar}>
            <div className={links}>
                {
                    linksArray.map((item,index) => (
                        <div className={link} key={index}>
                            <NavigationLink
                                text={item.text}
                                link={item.link}
                                active={item.active}
                            />
                        </div>
                    ))
                }
                {login
                &&
                <NavigationLink
                    text='Мои публикации'
                    link='/publication/my'
                    active={false}
                />}
            </div>
        </nav>
    );
};

export default Navbar;
