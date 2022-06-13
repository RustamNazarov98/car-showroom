import {LoginActionTypes, LoginAction} from "../../types/LoginType";

export function loginUser(phone_number: string): LoginAction {
    return {
        type: LoginActionTypes.LOGIN_USER,
        payload: phone_number
    };
}

export function logoutUser(): LoginAction {
    return {
        type: LoginActionTypes.LOGOUT_USER,
    };
}
