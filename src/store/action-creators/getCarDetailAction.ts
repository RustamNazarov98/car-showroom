import {Dispatch} from "redux";
import {cars} from "../../services/axios";
import {GetCarDetailAction, GetCarDetailActionTypes} from "../../types/GetCarDetailType";


export const fetchGetCarDetail = (id: number) => {
    return async (dispatch: Dispatch<GetCarDetailAction>) => {
        try {
            dispatch({type: GetCarDetailActionTypes.FETCH_GET_CAR_DETAIL})
            const response = await cars.get(`car/${id}`);
            dispatch({type: GetCarDetailActionTypes.FETCH_GET_CAR_DETAIL_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: GetCarDetailActionTypes.FETCH_GET_CAR_DETAIL_ERROR,
                payload: 'Произошла ошибка при загрузке детальной страницы'
            })
        }
    }
}

