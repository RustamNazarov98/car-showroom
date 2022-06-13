import {ICarModel} from "../models/ICarModel";

export interface GetCarBodyState {
    body: ICarModel[];
    loading: boolean;
    error: null | string;
}

export enum GetCarBodyActionTypes {
    FETCH_GET_CAR_BODY = 'FETCH_GET_CAR_BODY',
    FETCH_GET_CAR_BODY_SUCCESS = 'FETCH_GET_CAR_BODY_SUCCESS',
    FETCH_GET_CAR_BODY_ERROR = 'FETCH_GET_CAR_BODY_ERROR',
}

interface FetchGetCarBodyAction {
    type: GetCarBodyActionTypes.FETCH_GET_CAR_BODY;
}

interface FetchGetCarBodySuccessAction {
    type: GetCarBodyActionTypes.FETCH_GET_CAR_BODY_SUCCESS;
    payload: [];
}

interface FetchGetCarBodyErrorAction {
    type: GetCarBodyActionTypes.FETCH_GET_CAR_BODY_ERROR;
    payload: string;
}


export type GetCarBodyAction =
    FetchGetCarBodyAction |
    FetchGetCarBodySuccessAction |
    FetchGetCarBodyErrorAction
