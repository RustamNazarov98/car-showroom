import {Dispatch} from "redux";
import {cars} from "../../services/axios";
import {GetCarsAction, GetCarsActionTypes} from "../../types/GetCarsType";


export const fetchGetCars = () => {
    return async (dispatch: Dispatch<GetCarsAction>) => {
        try {
            dispatch({type: GetCarsActionTypes.FETCH_GET_CARS})
            const response = await cars.get('/car')
            dispatch({type: GetCarsActionTypes.FETCH_GET_CARS_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: GetCarsActionTypes.FETCH_GET_CARS_ERROR,
                payload: 'Произошла ошибка при загрузке моделей машин'
            })
        }
    }
}

