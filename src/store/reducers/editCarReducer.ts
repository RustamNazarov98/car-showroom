import {EditCarAction, EditCarActionTypes, EditCarState} from "../../types/EditCarType";
import {toast} from "react-toastify";

const initialState : EditCarState = {
    error: null,
    loading: false,
}

export const editCarReducer = (state = initialState, action: EditCarAction): EditCarState => {
    switch (action.type) {
        case EditCarActionTypes.FETCH_EDIT_CAR:
            toast('Загрузка...')
            return {...state, loading: true}
        case EditCarActionTypes.FETCH_EDIT_CAR_SUCCESS:
            toast.success('Успешно изменено')
            return {...state, loading: false}
        case EditCarActionTypes.FETCH_EDIT_CAR_ERROR:
            toast.error('Произошла ошибка при изменении')
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
