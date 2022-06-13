import {ICarModel} from "../models/ICarModel";

export interface GetCarModelState {
    models: ICarModel[];
    loading: boolean;
    error: null | string;
}

export enum GetCarModelActionTypes {
    FETCH_GET_CAR_MODEL = 'FETCH_GET_CAR_MODEL',
    FETCH_GET_CAR_MODEL_SUCCESS = 'FETCH_GET_CAR_MODEL_SUCCESS',
    FETCH_GET_CAR_MODEL_ERROR = 'FETCH_GET_CAR_MODEL_ERROR',
}

interface FetchGetCarModelAction {
    type: GetCarModelActionTypes.FETCH_GET_CAR_MODEL;
}

interface FetchGetCarModelSuccessAction {
    type: GetCarModelActionTypes.FETCH_GET_CAR_MODEL_SUCCESS;
    payload: [];
}

interface FetchGetCarModelErrorAction {
    type: GetCarModelActionTypes.FETCH_GET_CAR_MODEL_ERROR;
    payload: string;
}


export type GetCarModelAction =
    FetchGetCarModelAction |
    FetchGetCarModelSuccessAction |
    FetchGetCarModelErrorAction
