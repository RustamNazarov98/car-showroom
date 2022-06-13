import {RemoveCarAction, RemoveCarActionTypes, RemoveCarState} from "../../types/RemoveCarType";
import {toast} from "react-toastify";

const initialState : RemoveCarState = {
    error: null,
    loading: false,
}

export const removeCarReducer = (state = initialState, action: RemoveCarAction): RemoveCarState => {
    switch (action.type) {
        case RemoveCarActionTypes.FETCH_REMOVE_CAR:
            toast('Загрузка...')
            return {...state, loading: true}
        case RemoveCarActionTypes.FETCH_REMOVE_CAR_SUCCESS:
            toast.success('Успешно удалено')
            return {...state, loading: false}
        case RemoveCarActionTypes.FETCH_REMOVE_CAR_ERROR:
            toast.error('Произошла ошибка при удалении')
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
