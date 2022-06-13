import React from 'react';
import styles from './CarsList.module.scss';
import Car from '../../assets/images/card_picture.svg';
import {CarsItem} from "../index";
import {ListProps} from "./CarsList.props";

const CarsList = ({items}: ListProps) => {
    const {
        cars_list,
    } = styles

    return (
        <div className={cars_list}>
            {items.map((item,index) => (
                <React.Fragment key={index}>
                    <CarsItem {...item}/>
                </React.Fragment>
            ))}
        </div>
    );
};

export default CarsList;
