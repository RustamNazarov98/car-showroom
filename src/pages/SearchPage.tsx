import React from 'react';
import {Footer, Header, Navbar, PageInner} from "../components";
import {cars} from "../fakeData";

const SearchPage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <PageInner pageTitle={'Результаты поиска:'} items={cars}/>
            <Footer/>
        </>
    );
};

export default SearchPage;
