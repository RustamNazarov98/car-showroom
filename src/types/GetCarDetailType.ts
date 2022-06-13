import {ICar} from "../models/ICar";

export interface GetCarDetailState {
    car: ICar;
    loading: boolean;
    error: null | string;
}

export enum GetCarDetailActionTypes {
    FETCH_GET_CAR_DETAIL = 'FETCH_GET_CAR_DETAIL',
    FETCH_GET_CAR_DETAIL_SUCCESS = 'FETCH_GET_CAR_DETAIL_SUCCESS',
    FETCH_GET_CAR_DETAIL_ERROR = 'FETCH_GET_CAR_DETAIL_ERROR',
}

interface FetchGetCarDetailAction {
    type: GetCarDetailActionTypes.FETCH_GET_CAR_DETAIL;
}

interface FetchGetCarDetailSuccessAction {
    type: GetCarDetailActionTypes.FETCH_GET_CAR_DETAIL_SUCCESS;
    payload: ICar;
}

interface FetchGetCarDetailErrorAction {
    type: GetCarDetailActionTypes.FETCH_GET_CAR_DETAIL_ERROR;
    payload: string;
}


export type GetCarDetailAction =
    FetchGetCarDetailAction |
    FetchGetCarDetailSuccessAction |
    FetchGetCarDetailErrorAction
