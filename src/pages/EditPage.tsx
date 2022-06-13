import React, {useEffect, useState} from 'react';
import {AddForm, Footer, Header, Navbar} from "../components";
import {useActions} from "../hooks/useActions";
import {UseParamsId} from "../hooks/useParamsId";
import {UseTypedSelector} from "../hooks/useTypedSelector";

const EditPage = () => {
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
    const {id} = UseParamsId();
    const {fetchEditCar,fetchGetCarDetail} = useActions();
    const {car} = UseTypedSelector(state => state.carDetail);

    useEffect(() => {
        fetchGetCarDetail(id)
    },[])

    useEffect(() => {
        if(car){
            setReqObj(old => ({...old, ...car}));
        }
    },[car])

    const handleClick = () => {
        fetchEditCar(reqObj)
    }

    return (
        <>
            <Header/>
            <Navbar/>
            {car &&
                <AddForm
                    reqObj={reqObj}
                    setReqObj={setReqObj}
                    handleClick={handleClick}
                    title={'Изменить обьявление'}
                />}
            <Footer/>
        </>
    );
}
export default EditPage
