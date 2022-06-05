import React from 'react';
import {Footer, Header, Navbar, PageInner} from "../components";

const CarsPage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <PageInner pageTitle={'Автомобили:'}/>
            <Footer/>
        </>
    );
};

export default CarsPage;
