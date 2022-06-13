import React, {useEffect} from 'react';
import styles from './style.module.scss';
import {Button, PageTitle} from "../index";
import {CarInfo, CarSlider} from "./index";
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {UseParamsId} from "../../hooks/useParamsId";
import {useNavigate} from "react-router-dom";

const CarDetail = () => {
    const {
        car_detail,
        car_detail_inner,
        car_detail_btns
    } = styles

    const {car, loading, error} = UseTypedSelector(state => state.carDetail);
    const {fetchGetCarDetail,fetchRemoveCar} = useActions();
    const {id} = UseParamsId();
    let navigate = useNavigate();
    const {login} = UseTypedSelector(state => state.login);

    useEffect(() => {
        fetchGetCarDetail(id)
    },[id])

    const handleEditCar = () => {
        navigate(`/publication/edit/${car.id}`);
    }
    const handleDeleteCar = () => {
        fetchRemoveCar(id)
        navigate("/");
    }

    if(error){
        return <p>{error}</p>
    }
    if(loading){
        return <p>...loading</p>
    }
    return (
        <section className={car_detail}>
            <div className="container">
                <PageTitle text={car.name}/>
                <div className={car_detail_inner}>
                    <CarSlider {...car}/>
                    <CarInfo {...car}/>
                </div>
                {
                    login
                    &&
                    <div className={car_detail_btns}>
                        <Button color={'blue'} text={'Редактировать'} onClick={handleEditCar}/>
                        <Button color={'blue'} text={'Удалить'} onClick={handleDeleteCar}/>
                    </div>
                }
            </div>
        </section>
    );
};

export default CarDetail;
