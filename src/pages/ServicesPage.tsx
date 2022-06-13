import React, {useEffect} from 'react';
import {Footer, Header, Navbar, PageInner} from "../components";
import {useActions} from "../hooks/useActions";
import {UseTypedSelector} from "../hooks/useTypedSelector";

const ServicesPage = () => {
    const {fetchGetCars} = useActions();
    const {cars, error, loading} = UseTypedSelector(state => state.cars);

    useEffect(() => {
        fetchGetCars()
    },[])

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
