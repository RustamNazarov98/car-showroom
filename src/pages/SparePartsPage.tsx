import React from 'react';
import {Footer, Header, Navbar, PageInner} from "../components";
import {spare} from "../fakeData";

const SparePartsPage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <PageInner pageTitle={'Запчасти'} items={spare}/>
            <Footer/>
        </>
    );
};

export default SparePartsPage;
