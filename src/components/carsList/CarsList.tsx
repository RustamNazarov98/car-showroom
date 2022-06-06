import React from 'react';
import styles from './CarsList.module.scss';
import Car from '../../assets/images/card_picture.svg';
import {CarsItem} from "../index";

const CarsList = () => {
    const {
        cars_list,
    } = styles
    const cars = [
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        },
        {
            title: 'Mersedes-Benz',
            description: 'This is a car',
            year: '2022',
            production: 'Abu-Dhabi',
            price: '48',
            mileage: '39,433',
            id: 1,
            preview: Car,
            code: 'AED',
        }
    ]
    return (
        <div className={cars_list}>
            {cars.map((item,index) => (
                <React.Fragment key={index}>
                    <CarsItem {...item}/>
                </React.Fragment>
            ))}
        </div>
    );
};

export default CarsList;
