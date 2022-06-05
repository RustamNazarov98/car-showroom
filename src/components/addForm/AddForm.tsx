import React from 'react';
import styles from './style.module.scss';
import {PageTitle} from "../pageTitle/PageTitle";
import {Input} from "../input/Input";
import Textarea from "../textarea/Textarea";

const AddForm = () => {
    const {
        inner,
        form,
        input_wrapper,
        label
    } = styles

    return (
        <section className={inner}>
            <div className="container">
                <PageTitle text={'Разместить обьявление:'}/>
                <form action="#" className={form}>
                    <div className={input_wrapper}>
                        <p className={label}>Наименование</p>
                        <Input
                            value={''}
                            onChange={() => console.log('hello')}
                            placeholder={'Договорная'}
                        />
                    </div>
                    <div className={input_wrapper}>
                        <p className={label}>Описание</p>
                        <Textarea
                            value={''}
                            rows={10}
                            cols={3}
                            onChange={() => console.log('hello')}
                            placeholder={'Что-нибудь о товаре'}
                        />
                    </div>
                    <div className={input_wrapper}>
                        <p className={label}>Цена</p>
                        <Input
                            value={''}
                            onChange={() => console.log('hello')}
                            placeholder={'Договорная'}
                        />
                    </div>
                    <div className={input_wrapper}>
                        <p className={label}>Номер телефона</p>
                        <Input
                            value={''}
                            onChange={() => console.log('hello')}
                            placeholder={'Договорная'}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddForm;
