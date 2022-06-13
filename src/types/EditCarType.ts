
export interface EditCarState {
    loading: boolean;
    error: null | string;
}

export enum EditCarActionTypes {
    FETCH_EDIT_CAR = 'FETCH_EDIT_CAR',
    FETCH_EDIT_CAR_SUCCESS = 'FETCH_EDIT_CAR_SUCCESS',
    FETCH_EDIT_CAR_ERROR = 'FETCH_EDIT_CAR_ERROR',
}

interface FetchEditCarAction {
    type: EditCarActionTypes.FETCH_EDIT_CAR;
}

interface FetchEditCarSuccessAction {
    type: EditCarActionTypes.FETCH_EDIT_CAR_SUCCESS;
    payload: {};
}

interface FetchEditCarErrorAction {
    type: EditCarActionTypes.FETCH_EDIT_CAR_ERROR;
    payload: string;
}


export type EditCarAction =
    FetchEditCarAction |
    FetchEditCarSuccessAction |
    FetchEditCarErrorAction
