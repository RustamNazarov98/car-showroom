import React from 'react';
import styles from './style.module.scss';
import {PageTitle} from "../index";
import {CarInfo, CarSlider} from "./index";

const CarDetail = () => {
    const {
        car_detail,
        car_detail_inner
    } = styles

    return (
        <section className={car_detail}>
            <div className="container">
                <PageTitle text={'NISSAN X TRAIL'}/>
                <div className={car_detail_inner}>
                    <CarSlider/>
                    <CarInfo/>
                </div>
            </div>
        </section>
    );
};

export default CarDetail;
