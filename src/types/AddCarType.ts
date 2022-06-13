
export interface AddCarState {
    loading: boolean;
    error: null | string;
}

export enum AddCarActionTypes {
    FETCH_ADD_CAR = 'FETCH_ADD_CAR',
    FETCH_ADD_CAR_SUCCESS = 'FETCH_ADD_CAR_SUCCESS',
    FETCH_ADD_CAR_ERROR = 'FETCH_ADD_CAR_ERROR',
}

interface FetchAddCarAction {
    type: AddCarActionTypes.FETCH_ADD_CAR;
}

interface FetchAddCarSuccessAction {
    type: AddCarActionTypes.FETCH_ADD_CAR_SUCCESS;
    payload: {};
}

interface FetchAddCarErrorAction {
    type: AddCarActionTypes.FETCH_ADD_CAR_ERROR;
    payload: string;
}


export type AddCarAction =
    FetchAddCarAction |
    FetchAddCarSuccessAction |
    FetchAddCarErrorAction
