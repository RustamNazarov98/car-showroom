import React from 'react';
import {Footer, Header, Navbar, PageInner} from "../components";

const CarsPage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <PageInner pageTitle={'Мои Публикации:'}/>
            <Footer/>
        </>
    );
};

export default CarsPage;
