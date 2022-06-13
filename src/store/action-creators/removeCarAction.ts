import {Dispatch} from "redux";
import {RemoveCarAction, RemoveCarActionTypes} from "../../types/RemoveCarType";
import {cars} from "../../services/axios";

export const fetchRemoveCar = (id: number) => {
    return async (dispatch: Dispatch<RemoveCarAction>) => {
        try {
            dispatch({type: RemoveCarActionTypes.FETCH_REMOVE_CAR})
            const response = await cars.delete(`/car/${id}`);
            dispatch({type: RemoveCarActionTypes.FETCH_REMOVE_CAR_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: RemoveCarActionTypes.FETCH_REMOVE_CAR_ERROR,
                payload: 'Произошла ошибка при удалении'
            })
        }
    }
}
