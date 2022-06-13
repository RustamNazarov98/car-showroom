import React, {useEffect} from 'react';
import {Footer, Header, Navbar, PageInner} from "../components";
import {useActions} from "../hooks/useActions";
import {UseTypedSelector} from "../hooks/useTypedSelector";

const SearchPage = () => {
    const {fetchGetCars} = useActions();
    const {searched_cars, error, loading} = UseTypedSelector(state => state.searched_cars);

    useEffect(() => {
        fetchGetCars()
    },[])

    return (
        <>
            <Header/>
            <Navbar/>
            <PageInner pageTitle={'Результаты поиска:'} items={searched_cars}/>
            <Footer/>
        </>
    );
};

export default SearchPage;
