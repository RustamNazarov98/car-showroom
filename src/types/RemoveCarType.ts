
export interface RemoveCarState {
    loading: boolean;
    error: null | string;
}

export enum RemoveCarActionTypes {
    FETCH_REMOVE_CAR = 'FETCH_REMOVE_CAR',
    FETCH_REMOVE_CAR_SUCCESS = 'FETCH_REMOVE_CAR_SUCCESS',
    FETCH_REMOVE_CAR_ERROR = 'FETCH_REMOVE_CAR_ERROR',
}

interface FetchRemoveCarAction {
    type: RemoveCarActionTypes.FETCH_REMOVE_CAR;
}

interface FetchRemoveCarSuccessAction {
    type: RemoveCarActionTypes.FETCH_REMOVE_CAR_SUCCESS;
    payload: any;
}

interface FetchRemoveCarErrorAction {
    type: RemoveCarActionTypes.FETCH_REMOVE_CAR_ERROR;
    payload: string;
}


export type RemoveCarAction =
    FetchRemoveCarAction |
    FetchRemoveCarSuccessAction |
    FetchRemoveCarErrorAction
