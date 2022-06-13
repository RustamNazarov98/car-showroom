import React from 'react';
import styles from './style.module.scss';
import CarIcon from '../../assets/images/car-icon.svg';
import BXS from '../../assets/images/bxs-icon.svg';
import Cylindr from '../../assets/images/cylindr-icon.svg';
import Loc from '../../assets/images/loc-icon.svg';
import Road from '../../assets/images/road-icon.svg';
import Paint from '../../assets/images/paint-icon.svg';
import Door from '../../assets/images/door-icon.svg';
import V from '../../assets/images/V-icon.svg';
import Trans from '../../assets/images/transmission-icon.svg';

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
            icon: Paint,
            title: 'Цвет',
            data: 'Оранжевый',
        },
        {
            icon: Loc,
            title: 'Регион',
            data: 'Бишкек',
        },
        {
            icon: Trans,
            title: 'Трансмиссия',
            data: '4',
        },
        {
            icon: V,
            title: 'Обьем двигателя',
            data: '4',
        },
        {
            icon: BXS,
            title: 'Топливо',
            data: 'Бензин',
        },
        {
            icon: Cylindr,
            title: 'Цилиндр',
            data: '4',
        },
        {
            icon: Door,
            title: 'Двери',
            data: '4',
        },
        {
            icon: Road,
            title: 'Пробег',
            data: '50 000 км',
        },
        {
            icon: CarIcon,
            title: 'Руль',
            data: 'левый',
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
                <p>
                    Nissan X-Trail- это пятиместный кроссовер. Его габаритные размеры составляют: длина 4643 мм, ширина 1820 мм, высота 1695 мм, колесная база 2706 мм, а величина дорожного просвета равняется 210 миллиметрам. Это солидный клиренс, благодаря которому автомобиль не сядет на брюхо при движении по глубокой колее, сможет штурмовать бордюры во время парковки и сохранит приемлемую плавность хода на разбитых дорогах с твердым покрытием.
                </p>
            </div>
        </div>
    );
};

export default CarInfo;
