import React, {useEffect, useState} from 'react';
import styles from './style.module.scss';
import {PageTitle} from "../pageTitle/PageTitle";
import {Input} from "../input/Input";
import Textarea from "../textarea/Textarea";
import {Button, Select} from "../index";
import AddImage from '../../assets/images/add_image.png';
import {
    bodyOptions,
    citiesOptions,
    colorOptions,
    cylinderOptions,
    fuelOptions,
    ruleOptions,
    transmissionOptions
} from "./optionValues";
import {useDispatch} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import { getBase64 } from '../../services/getBase64';
import {ICar} from "../../models/ICar";

export interface AddFormProps {
    reqObj: ICar;
    setReqObj: any;
    handleClick: () => void;
    title: string;
}
const AddForm = ({reqObj,setReqObj, handleClick, title}: AddFormProps) => {
    const {fetchAddCar,fetchGetCarModel,fetchGetCarBody} = useActions();
    const {models, error, loading} = UseTypedSelector(state => state.carModels);
    const {body} = UseTypedSelector(state => state.carBody);

    useEffect(() => {
        fetchGetCarModel()
        fetchGetCarBody()
    },[])

    const {
        inner,
        form,
        input_wrapper,
        label,
        cars_input,
        input_file
    } = styles


    const handleChangeObj = (key:string, value: string | number) => {
        setReqObj((old: any) => ({...old, [key]: value}))
    };

    const handleChangeFile = (files: any) => {
        const file = files[0];
        getBase64(file).then(
            data => setReqObj((old: any) => ({...old, image: data}))
        );

    }


    return (
        <section className={inner}>
            <div className="container">
                <PageTitle text={title}/>
                <form action="#" className={form}>
                    <div className={input_wrapper}>
                        {
                            reqObj.image ?
                                <img src={reqObj.image} alt="image"/>
                                :
                                <>
                                    <input type="file" className={input_file} name="file" id="file" onChange={e => handleChangeFile(e.target.files)}/>
                                    <label htmlFor="file">
                                        <img src={AddImage} alt="#"/>
                                    </label>
                                </>
                        }
                    </div>
                    <div className={input_wrapper}>
                        <p className={label}>Наименование</p>
                        <Input objKey={'name'} value={reqObj.name} onChange={handleChangeObj} placeholder={'Наименование'}/>
                    </div>
                    <div className={input_wrapper}>
                        <p className={label}>Описание</p>
                        <Textarea objKey={'description'} value={reqObj.description} rows={10} cols={3} onChange={handleChangeObj} placeholder={'Что-нибудь о товаре'}/>
                    </div>
                    <div className={cars_input}>
                        <div className={input_wrapper}>
                            <p className={label}>Тип Кузова</p>
                            <Select name={'body'} placeholder={'Выберите тип кузова'} options={body} onChange={handleChangeObj}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Цвет</p>
                            <Select name={'color'} placeholder={'Выберите цвет'} options={colorOptions} onChange={handleChangeObj}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Обьем двигателя</p>
                            <Input value={reqObj.volume} onChange={handleChangeObj} placeholder={'Обьем'} objKey={'volume'}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Топливо</p>
                            <Select name={'fuel'} placeholder={'Топливо'} options={fuelOptions} onChange={handleChangeObj}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Цилиндр</p>
                            <Select name={'cylinder'} placeholder={'Цилиндр'} options={cylinderOptions} onChange={handleChangeObj}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Коробка передач</p>
                            <Select name={'transmission'} placeholder={'Коробка передач'} options={transmissionOptions} onChange={handleChangeObj}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Пробег</p>
                            <Input value={reqObj.mileage} onChange={handleChangeObj} placeholder={'Пробег'} objKey={'mileage'}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Двери</p>
                            <Input value={reqObj.doors} onChange={handleChangeObj} placeholder={'Двери'} objKey={'doors'}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Руль</p>
                            <Select name={'wheel'} placeholder={'Руль'} options={ruleOptions} onChange={handleChangeObj}/>
                        </div>
                    </div>
                    <div className={cars_input}>
                        <div className={input_wrapper}>
                            <p className={label}>Город</p>
                            <Select name={'city'} placeholder={'Руль'} options={citiesOptions} onChange={handleChangeObj}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Цена</p>
                            <Input value={reqObj.price} onChange={handleChangeObj} objKey={'price'} placeholder={'0'}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Номер телефона</p>
                            <Input value={reqObj.phone_number} onChange={handleChangeObj} placeholder={'Напишите ваш номер'} objKey={'phone_number'}/>
                        </div>
                    </div>
                    <Button color={'blue'} text={'Разместить'} onClick={handleClick}/>
                </form>
            </div>
        </section>
    );
};

export default AddForm;
