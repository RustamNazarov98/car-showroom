import React from 'react';
import styles from './Navbar.module.scss';
import {NavigationLink} from "./NavigationLink";

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
        },
        {
            text: 'Мои публикации',
            link: '/publication/my',
            active: false,
        }
    ]

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
            </div>
        </nav>
    );
};

export default Navbar;
