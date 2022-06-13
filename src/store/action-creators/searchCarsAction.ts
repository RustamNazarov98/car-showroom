import {Dispatch} from "redux";
import {cars} from "../../services/axios";
import {SearchCarsAction, SearchCarsActionTypes} from "../../types/SearchCarsType";

export interface GetCars {
        transmission?: number,
        priceFrom?: number,
        priceTo?: number,
        model?: number,
        body?: number,
        yearFrom?: number,
        yearTo?: number,
}

export const fetchSearchCars = (params: GetCars) => {
    return async (dispatch: Dispatch<SearchCarsAction>) => {
        try {
            dispatch({type: SearchCarsActionTypes.FETCH_SEARCH_CARS})
            const response = await cars.get(`/car?transmission=${params.transmission}&priceFrom=${params.priceFrom}&priceTo=${params.priceTo}&model=${params.model}&body=${params.body}`);
            dispatch({type: SearchCarsActionTypes.FETCH_SEARCH_CARS_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: SearchCarsActionTypes.FETCH_SEARCH_CARS_ERROR,
                payload: 'Произошла ошибка при загрузке моделей машин'
            })
        }
    }
}

