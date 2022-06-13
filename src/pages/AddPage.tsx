import React, {useState} from 'react';
import {AddForm, Footer, Header, Navbar} from "../components";
import {useActions} from "../hooks/useActions";
import {useNavigate} from "react-router-dom";

const AddPage = () => {
    const navigate = useNavigate()
    const [reqObj, setReqObj] = useState({
        price: 0,
        image: null,
        name: '',
        cylinder: 1,
        fuel: 1,
        transmission: 1,
        description: '',
        model: '1',
        body: '1',
        volume: '',
        mileage: '',
        doors: '',
        phone_number: '',
        wheel: '',
        city: ''
    });
    const {fetchAddCar} = useActions();

    const handleClick = () => {
        fetchAddCar(reqObj)
        setReqObj({
            price: 0,
            image: null,
            name: '',
            cylinder: 1,
            fuel: 1,
            transmission: 1,
            description: '',
            model: '1',
            body: '1',
            volume: '',
            mileage: '',
            doors: '',
            phone_number: '',
            wheel: '',
            city: ''
        })
        navigate('/')
    }

    return (
        <>
            <Header/>
            <Navbar/>
            <AddForm
                reqObj={reqObj}
                setReqObj={setReqObj}
                handleClick={handleClick}
                title={'Добавить обьявление'}
            />
            <Footer/>
        </>
    );
}
export default AddPage
