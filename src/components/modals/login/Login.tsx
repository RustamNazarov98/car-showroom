import React, {useEffect, useState} from 'react';
import styles from './Login.module.scss';
import {useActions} from "../../../hooks/useActions";
import {UseTypedSelector} from "../../../hooks/useTypedSelector";
import {Input} from "../../input/Input";
import {IUser} from "../../../models/IUser";
import {Button} from "../../index";
import {toast} from "react-toastify";

const Login = () => {
    const {
        modal_overlay,
        modal_style,
        modal_close,
        form
    } = styles

    const {hideModal} = useActions();
    const {modal} = UseTypedSelector(state => state.modal);
    const {loginUser} = useActions();

    const onCloseButtonClick = () => {
        hideModal()
    }
    const [user, setUser] = useState<IUser>({
        password: '',
        phone_number: ''
    })

    const handleChangeUser = (key:string, value: string | number) => {
        setUser(old => ({...old, [key]: value}))
    };

    const handleClick = () => {
        loginUser(user.phone_number)
        toast.success('Вы успешно зашли')
        hideModal()
        setUser({
            password: '',
            phone_number: ''
        })
    }

    return (
        <>
            {
                modal
                &&
                <div className={modal_overlay}>
                    <div className={modal_style}>
                        <span className={modal_close} onClick={onCloseButtonClick}>
                             &#10005;
                        </span>
                        <h2>Вход</h2>
                        <form className={form}>
                            <Input
                                objKey={'password'}
                                placeholder={'Пароль'}
                                value={user.password}
                                onChange={handleChangeUser}
                            />
                            <Input
                                objKey={'phone_number'}
                                placeholder={'Номер телефона'}
                                value={user.phone_number}
                                onChange={handleChangeUser}
                            />
                            <Button color={'blue'} text={'Войти'} onClick={handleClick}/>
                        </form>
                    </div>
                </div>
            }
        </>
    );
};

export default Login;
