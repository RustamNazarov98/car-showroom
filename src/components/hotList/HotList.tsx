import React from 'react';
import styles from './HotList.module.scss';
import {Link} from "react-router-dom";
import {CarsList} from "../index";
import {cars} from "../../fakeData";

const HotList = () => {
    const {
        hot_list,
        title,
        title_text
    } = styles
    return (
        <section className={hot_list}>
            <div className="container">
                <div className={title}>
                    <h2 className={title_text}>Горячие предложения</h2>
                    <Link to='/search'>
                        Посмотреть все
                    </Link>
                </div>
                <CarsList items={cars}/>
            </div>
        </section>
    );
};

export default HotList;
