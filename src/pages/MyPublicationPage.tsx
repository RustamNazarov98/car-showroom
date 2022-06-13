import React from 'react';
import {Footer, Header, Navbar, PageInner} from "../components";
import {cars} from "../fakeData";

const CarsPage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <PageInner pageTitle={'Мои Публикации:'} items={cars}/>
            <Footer/>
        </>
    );
};

export default CarsPage;
