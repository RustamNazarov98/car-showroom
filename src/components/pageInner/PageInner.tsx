import React from 'react';
import styles from './PageInner.module.scss'
import {CarsList, PageTitle} from "../index";

export interface Props{
    pageTitle: string;
}

const PageInner = ({pageTitle}: Props) => {
    const {
        page_inner,
        title
    } = styles
    return (
        <section className={page_inner}>
            <div className="container">
                <div className={title}>
                    <PageTitle text={pageTitle}/>
                </div>
                <CarsList/>
            </div>
        </section>
    );
};

export default PageInner;
