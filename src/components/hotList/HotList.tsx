import React, {useEffect} from 'react';
import styles from './HotList.module.scss';
import {Link} from "react-router-dom";
import {CarsList} from "../index";
import {useActions} from "../../hooks/useActions";
import {UseTypedSelector} from "../../hooks/useTypedSelector";

const HotList = () => {
    const {
        hot_list,
        title,
        title_text
    } = styles

    const {fetchGetCars} = useActions();
    const {cars, error, loading} = UseTypedSelector(state => state.cars);

    useEffect(() => {
        fetchGetCars()
    },[])

    return (
        <section className={hot_list}>
            <div className="container">
                <div className={title}>
                    <h2 className={title_text}>Горячие предложения</h2>
                    <Link to='/search'>
                        Посмотреть все
                    </Link>
                </div>
                {error && <span>Не удалось загрузить данные</span>}
                {!loading ?  <CarsList items={cars}/> : <span>loading ...</span>}
            </div>
        </section>
    );
};

export default HotList;
