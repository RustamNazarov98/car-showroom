import React from 'react';
import {Footer, Header, Navbar, PageInner} from "../components";

const SearchPage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <PageInner pageTitle={'Результаты поиска:'}/>
            <Footer/>
        </>
    );
};

export default SearchPage;
