import {LoginAction, LoginActionTypes} from "../../types/LoginType";
import {toast} from "react-toastify";

export const initialState = {
    login: false,
};

export function loginUserReducer(state = initialState, action: LoginAction)  {
    switch (action.type) {
        case LoginActionTypes.LOGIN_USER:
            localStorage.setItem("phone_number", action.payload.phone_number)
            return {...state, login: true,};
        case LoginActionTypes.LOGOUT_USER:
            localStorage.clear()
            toast.success('Вы успешно вышли')
            return {...state, login: false,};
        default:
            return state;
    }
}

