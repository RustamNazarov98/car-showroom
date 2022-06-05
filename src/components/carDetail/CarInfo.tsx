import React from 'react';
import styles from './style.module.scss';
import CarIcon from '../../assets/images/car-icon.svg';

const CarInfo = () => {
    const {
        car_info,
        car_info_title,
        top_text,
        main_text,
        bottom_text,
        car_info_price,
        car_info_options,
        option,
        option_icon,
        option_text,
        car_info_phone,
        car_info_description,
        icon_wrapper
    } = styles

    const dataParams = [
        {
            icon: CarIcon,
            title: 'Тип кузова',
            data: 'Внедорожник',
        },
        {
            icon: CarIcon,
            title: 'Тип кузова',
            data: 'Внедорожник',
        },
        {
            icon: CarIcon,
            title: 'Тип кузова',
            data: 'Внедорожник',
        },
        {
            icon: CarIcon,
            title: 'Тип кузова',
            data: 'Внедорожник',
        },
        {
            icon: CarIcon,
            title: 'Тип кузова',
            data: 'Внедорожник',
        },
        {
            icon: CarIcon,
            title: 'Тип кузова',
            data: 'Внедорожник',
        },
        {
            icon: CarIcon,
            title: 'Тип кузова',
            data: 'Внедорожник',
        },
        {
            icon: CarIcon,
            title: 'Тип кузова',
            data: 'Внедорожник',
        }
    ]

    return (
        <div className={car_info}>
            <div className={car_info_title}>
                <p className={top_text}>ОПУБЛИКОВАНО 2 ДНЯ НАЗАД</p>
                <p className={main_text}>NISSAN X TRAIL</p>
                <p className={bottom_text}>2022-39,488 km</p>
            </div>
            <p className={car_info_price}>48,000 <span>AED</span></p>
            <div className={car_info_options}>
                {dataParams.map((item,index) => (
                    <div className={option} key={index}>
                        <div className={option_icon}>
                            <div className={icon_wrapper}>
                                <img src={item.icon} alt="icon"/>

                            </div>
                        </div>
                        <div className={option_text}>
                            <span>{item.title}</span>
                            <p>{item.data}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={car_info_phone}>
                <p>Номер телефона</p>
                <a href="tel:+ 996 505 505 505">+996 505 505 505</a>
            </div>
            <div className={car_info_description}>
                <span>Описание</span>
                <p>Краткая информация о таваре описания состояния маши может быть какие либо предмопочтения</p>
            </div>
        </div>
    );
};

export default CarInfo;
