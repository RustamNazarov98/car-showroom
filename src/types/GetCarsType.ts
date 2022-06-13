import {ICar} from "../models/ICar";

export interface GetCarsState {
    cars: ICar[];
    loading: boolean;
    error: null | string;
}

export enum GetCarsActionTypes {
    FETCH_GET_CARS = 'FETCH_GET_CARS',
    FETCH_GET_CARS_SUCCESS = 'FETCH_GET_CARS_SUCCESS',
    FETCH_GET_CARS_ERROR = 'FETCH_GET_CARS_ERROR',
}

interface FetchGetCarsAction {
    type: GetCarsActionTypes.FETCH_GET_CARS;
}

interface FetchGetCarsSuccessAction {
    type: GetCarsActionTypes.FETCH_GET_CARS_SUCCESS;
    payload: [];
}

interface FetchGetCarsErrorAction {
    type: GetCarsActionTypes.FETCH_GET_CARS_ERROR;
    payload: string;
}


export type GetCarsAction =
    FetchGetCarsAction |
    FetchGetCarsSuccessAction |
    FetchGetCarsErrorAction
