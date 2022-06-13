import React from 'react';
import {Footer, Header, Navbar, PageInner} from "../components";
import {cars} from "../fakeData";

const ServicesPage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <PageInner pageTitle={'Аренда авто'} items={cars}/>
            <Footer/>
        </>
    );
};

export default ServicesPage;
