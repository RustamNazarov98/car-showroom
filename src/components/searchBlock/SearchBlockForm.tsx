import React from 'react';
import Select from "../select";
import styles from './SearchBlock.module.scss';
import {Input} from "../input/Input";
import {Button} from "../index";
import {useNavigate} from "react-router-dom";

const SearchBlockForm = () => {
    const {
        form,
        inputs
    } = styles

    const navigate = useNavigate();

    const selectOptions = [
        {value: 'BMV'},
        {value: 'Mersedes-Benz'},
        {value: 'Toyota'},
    ]

    const handleClick = () => {
        navigate("/search");
    }

    return (
        <form className={form}>
            <Select
                name={'cars'}
                options={selectOptions}
                placeholder={'Все Марки'}
            />
            <div className={inputs}>
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'год от'}
                />
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'год до'}
                />
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'цена от'}
                />
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'цена до'}
                />
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'км от'}
                />
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'км до'}
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
