import {GetCarModelAction, GetCarModelState,GetCarModelActionTypes } from "../../types/GetCarModelType";

const initialState : GetCarModelState = {
    models: [],
    error: null,
    loading: false,
}

export const getCarModelReducer = (state = initialState, action: GetCarModelAction): GetCarModelState => {
    switch (action.type) {
        case GetCarModelActionTypes.FETCH_GET_CAR_MODEL:
            return {...state, loading: true}
        case GetCarModelActionTypes.FETCH_GET_CAR_MODEL_SUCCESS:
            return {...state, loading: false, models: action.payload}
        case GetCarModelActionTypes.FETCH_GET_CAR_MODEL_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
