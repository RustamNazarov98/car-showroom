import {ICar} from "../models/ICar";

export interface SearchCarsState {
    searched_cars: ICar[];
    loading: boolean;
    error: null | string;
}

export enum SearchCarsActionTypes {
    FETCH_SEARCH_CARS = 'FETCH_SEARCH_CARS',
    FETCH_SEARCH_CARS_SUCCESS = 'FETCH_SEARCH_CARS_SUCCESS',
    FETCH_SEARCH_CARS_ERROR = 'FETCH_SEARCH_CARS_ERROR',
}

interface FetchSearchCarsAction {
    type: SearchCarsActionTypes.FETCH_SEARCH_CARS;
}

interface FetchSearchCarsSuccessAction {
    type: SearchCarsActionTypes.FETCH_SEARCH_CARS_SUCCESS;
    payload: [];
}

interface FetchSearchCarsErrorAction {
    type: SearchCarsActionTypes.FETCH_SEARCH_CARS_ERROR;
    payload: string;
}


export type SearchCarsAction =
    FetchSearchCarsAction |
    FetchSearchCarsSuccessAction |
    FetchSearchCarsErrorAction
