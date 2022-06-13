import {Dispatch} from "redux";
import {cars} from "../../services/axios";
import {GetCarModelAction, GetCarModelActionTypes} from "../../types/GetCarModelType";


export const fetchGetCarModel = () => {
    return async (dispatch: Dispatch<GetCarModelAction>) => {
        try {
            dispatch({type: GetCarModelActionTypes.FETCH_GET_CAR_MODEL})
            const response = await cars.get('/car-model');
            dispatch({type: GetCarModelActionTypes.FETCH_GET_CAR_MODEL_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: GetCarModelActionTypes.FETCH_GET_CAR_MODEL_ERROR,
                payload: 'Произошла ошибка при загрузке моделей машин'
            })
        }
    }
}

