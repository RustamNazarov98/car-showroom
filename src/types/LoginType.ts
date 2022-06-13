export enum LoginActionTypes {
    LOGIN_USER= 'LOGIN_USER',
    LOGOUT_USER= 'LOGOUT_USER',
}

export interface LoginAction {
    type: LoginActionTypes;
    payload?: any;
}
