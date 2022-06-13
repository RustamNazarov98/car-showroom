import React, {useEffect, useState} from 'react';
import Select from "../select";
import styles from './SearchBlock.module.scss';
import {Input} from "../input/Input";
import {Button} from "../index";
import {useNavigate} from "react-router-dom";
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const SearchBlockForm = () => {
    const {
        form,
        inputs
    } = styles

    const navigate = useNavigate();
    const {fetchGetCarModel,fetchGetCarBody, fetchSearchCars} = useActions();
    const {models} = UseTypedSelector(state => state.carModels);
    const {body} = UseTypedSelector(state => state.carBody);

    useEffect(() => {
        fetchGetCarModel()
        fetchGetCarBody()
    },[])

    const handleClick = () => {
        fetchSearchCars(searchObj)
        navigate("/search");
    }
    const [searchObj, setSearchObj] = useState({
        transmission: 1,
        priceFrom: 0,
        priceTo: 0,
        model: 1,
        body: 1,
        yearFrom: 0,
        yearTo: 0,
    })

    const handleChangeObj = (key:string, value: string | number) => {
        setSearchObj((old: any) => ({...old, [key]: value}))
    };

    return (
        <form className={form}>
            <Select
                name={'models'}
                options={models}
                placeholder={'Все Марки'}
                onChange={handleChangeObj}
            />
            <Select
                name={'body'}
                options={body}
                placeholder={'Все Марки'}
                onChange={handleChangeObj}
            />
            <div className={inputs}>
                <Input
                    value={searchObj.yearFrom}
                    onChange={handleChangeObj}
                    placeholder={'год от'}
                    objKey={'yearFrom'}
                />
                <Input
                    value={searchObj.yearTo}
                    onChange={handleChangeObj}
                    placeholder={'год до'}
                    objKey={'yearTo'}
                />
                <Input
                    value={searchObj.priceFrom}
                    onChange={handleChangeObj}
                    placeholder={'цена от'}
                    objKey={'priceFrom'}
                />
                <Input
                    value={searchObj.priceTo}
                    onChange={handleChangeObj}
                    placeholder={'цена до'}
                    objKey={'priceTo'}
                />
            </div>
            <Button
                color={'blue'}
                text={'Показать'}
                onClick={handleClick}
            />
        </form>
    );
};

export default SearchBlockForm;
