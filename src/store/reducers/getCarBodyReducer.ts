import {GetCarBodyAction, GetCarBodyActionTypes,GetCarBodyState } from "../../types/GetCarBodyType";

const initialState : GetCarBodyState = {
    body: [],
    error: null,
    loading: false,
}

export const getCarBodyReducer = (state = initialState, action: GetCarBodyAction): GetCarBodyState => {
    switch (action.type) {
        case GetCarBodyActionTypes.FETCH_GET_CAR_BODY:
            return {...state, loading: true}
        case GetCarBodyActionTypes.FETCH_GET_CAR_BODY_SUCCESS:
            return {...state, loading: false, body: action.payload}
        case GetCarBodyActionTypes.FETCH_GET_CAR_BODY_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
