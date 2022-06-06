import React from 'react';
import Select from "../select";
import styles from './SearchBlock.module.scss';
import {Input} from "../input/Input";
import {Button} from "../index";

const SearchBlockForm = () => {
    const {
        form,
        inputs
    } = styles

    const selectOptions = [
        {value: 'BMV'},
        {value: 'Mersedes-Benz'},
        {value: 'Toyota'},
    ]

    return (
        <form className={form}>
            <Select
                name={'search-form'}
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
                    placeholder={'год от'}
                />
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'год от'}
                />
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'год от'}
                />
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'год от'}
                />
                <Input
                    value={''}
                    onChange={() => console.log('hello')}
                    placeholder={'год от'}
                />
            </div>
            <Button
                color={'blue'}
                text={'Показать'}
                onClick={() => console.log('Показать')}
            />
        </form>
    );
};

export default SearchBlockForm;
