import React from 'react';
import styles from './SearchBlock.module.scss';
import {PageTitle} from "../pageTitle/PageTitle";
import SearchBlockForm from "./SearchBlockForm";

const SearchBlock = () => {
    const {
        search_block,
        search_block_inner
    } = styles;

    return (
        <section className={search_block}>
                <div className="container">
                    <div className={search_block_inner}>
                        <PageTitle
                            text={'НАЙТИ И СРАВНИТЬ ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ НА НАШЕМ САЙТЕ'}
                        />
                        <SearchBlockForm/>
                    </div>
                </div>
        </section>
    );
};

export default SearchBlock;
