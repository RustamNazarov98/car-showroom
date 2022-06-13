import React, {useState} from 'react';
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


const AddForm = () => {
    const {
        inner,
        form,
        input_wrapper,
        label,
        cars_input,
        input_file
    } = styles

    const [reqObj, setReqObj] = useState({
        price: '',
        image: null,
        name: '',
        cylinder: null,
        fuel: null,
        transmission: '',
        description: '',
        model: null,
        body: null,
        volume: '',
        mileage: '',
        doors: '',
        phone_number: '',
        img: null,
    });

    const handleChangeObj = (key:string, value: string | number) => {
        setReqObj(old => ({...old, [key]: value}))
    };

    const handleChangeFile = (files: any) => {
        const file = files[0];
        setReqObj(old => ({...old, img: file}))
    }

    return (
        <section className={inner}>
            <div className="container">
                <PageTitle text={'Разместить обьявление:'}/>
                <form action="#" className={form}>
                    <div className={input_wrapper}>
                        {
                            reqObj.img ?
                                <img src={URL.createObjectURL(reqObj.img)} alt="image"/>
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
                            <Select name={'model'} placeholder={'Выберите тип кузова'} options={bodyOptions}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Цвет</p>
                            <Select name={'model'} placeholder={'Выберите цвет'} options={colorOptions}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Обьем двигателя</p>
                            <Input value={reqObj.volume} onChange={handleChangeObj} placeholder={'Обьем'} objKey={'volume'}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Топливо</p>
                            <Select name={'model'} placeholder={'Топливо'} options={fuelOptions}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Цилиндр</p>
                            <Select name={'model'} placeholder={'Цилиндр'} options={cylinderOptions}/>
                        </div>
                        <div className={input_wrapper}>
                            <p className={label}>Коробка передач</p>
                            <Select name={'model'} placeholder={'Коробка передач'} options={transmissionOptions}/>
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
                            <Select name={'model'} placeholder={'Руль'} options={ruleOptions}/>
                        </div>
                    </div>
                    <div className={cars_input}>
                        <div className={input_wrapper}>
                            <p className={label}>Город</p>
                            <Select name={'model'} placeholder={'Руль'} options={citiesOptions}/>
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
                    <Button color={'blue'} text={'Разместить'} onClick={() => alert('Разместить')}/>
                </form>
            </div>
        </section>
    );
};

export default AddForm;
