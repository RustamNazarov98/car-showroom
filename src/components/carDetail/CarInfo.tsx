import React from 'react';
import styles from './style.module.scss';

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
        car_info_description
    } = styles
    return (
        <div className={car_info}>
            <div className={car_info_title}>
                <p className={top_text}>ОПУБЛИКОВАНО 2 ДНЯ НАЗАД</p>
                <p className={main_text}>NISSAN X TRAIL</p>
                <p className={bottom_text}>2022-39,488 km</p>
            </div>
            <p className={car_info_price}>48,000 <span>AED</span></p>
            <div className={car_info_options}>
                <div className={option}>
                    <div className={option_icon}>
                        icon
                    </div>
                    <div className={option_text}>
                        <span>Тип кузова</span>
                        <p>Внедорожник</p>
                    </div>
                </div>
                <div className={option}>
                    <div className={option_icon}>
                        icon
                    </div>
                    <div className={option_text}>
                        <span>Тип кузова</span>
                        <p>Внедорожник</p>
                    </div>
                </div>
                <div className={option}>
                    <div className={option_icon}>
                        icon
                    </div>
                    <div className={option_text}>
                        <span>Тип кузова</span>
                        <p>Внедорожник</p>
                    </div>
                </div>
                <div className={option}>
                    <div className={option_icon}>
                        icon
                    </div>
                    <div className={option_text}>
                        <span>Тип кузова</span>
                        <p>Внедорожник</p>
                    </div>
                </div>
                <div className={option}>
                    <div className={option_icon}>
                        icon
                    </div>
                    <div className={option_text}>
                        <span>Тип кузова</span>
                        <p>Внедорожник</p>
                    </div>
                </div>
                <div className={option}>
                    <div className={option_icon}>
                        icon
                    </div>
                    <div className={option_text}>
                        <span>Тип кузова</span>
                        <p>Внедорожник</p>
                    </div>
                </div>
                <div className={option}>
                    <div className={option_icon}>
                        icon
                    </div>
                    <div className={option_text}>
                        <span>Тип кузова</span>
                        <p>Внедорожник</p>
                    </div>
                </div>
                <div className={option}>
                    <div className={option_icon}>
                        icon
                    </div>
                    <div className={option_text}>
                        <span>Тип кузова</span>
                        <p>Внедорожник</p>
                    </div>
                </div>
            </div>
            <div className={car_info_phone}>
                <p>Номер телефона</p>
                <a href="tel:+ 996 505 505 505">+996 505 505 505</a>
            </div>
            <div className={car_info_description}>
                <p>Описание</p>
                <p>Краткая информация о таваре описания состояния маши может быть какие либо предмопочтения</p>
            </div>
        </div>
    );
};

export default CarInfo;
