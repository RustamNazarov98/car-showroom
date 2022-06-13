import {Dispatch} from "redux";
import {cars} from "../../services/axios";
import {GetCarBodyAction, GetCarBodyActionTypes} from "../../types/GetCarBodyType";


export const fetchGetCarBody = () => {
    return async (dispatch: Dispatch<GetCarBodyAction>) => {
        try {
            dispatch({type: GetCarBodyActionTypes.FETCH_GET_CAR_BODY})
            const response = await cars.get('/car-body');
            dispatch({type: GetCarBodyActionTypes.FETCH_GET_CAR_BODY_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: GetCarBodyActionTypes.FETCH_GET_CAR_BODY_ERROR,
                payload: 'Произошла ошибка при загрузке моделей машин'
            })
        }
    }
}

