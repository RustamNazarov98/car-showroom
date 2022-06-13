import {GetCarsAction, GetCarsActionTypes,GetCarsState } from "../../types/GetCarsType";

const initialState : GetCarsState = {
    cars: [],
    error: null,
    loading: false,
}

export const getCarsReducer = (state = initialState, action: GetCarsAction): GetCarsState => {
    switch (action.type) {
        case GetCarsActionTypes.FETCH_GET_CARS:
            return {...state, loading: true}
        case GetCarsActionTypes.FETCH_GET_CARS_SUCCESS:
            return {...state, loading: false, cars: action.payload}
        case GetCarsActionTypes.FETCH_GET_CARS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
