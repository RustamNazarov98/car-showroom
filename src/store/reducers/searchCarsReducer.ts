import {SearchCarsAction, SearchCarsActionTypes,SearchCarsState } from "../../types/SearchCarsType";

const initialState : SearchCarsState = {
    searched_cars: [],
    error: null,
    loading: false,
}

export const searchCarsReducer = (state = initialState, action: SearchCarsAction): SearchCarsState => {
    switch (action.type) {
        case SearchCarsActionTypes.FETCH_SEARCH_CARS:
            return {...state, loading: true}
        case SearchCarsActionTypes.FETCH_SEARCH_CARS_SUCCESS:
            return {...state, loading: false, searched_cars: action.payload}
        case SearchCarsActionTypes.FETCH_SEARCH_CARS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
