import {AddCarAction, AddCarActionTypes, AddCarState} from "../../types/AddCarType";
import {toast} from "react-toastify";

const initialState : AddCarState = {
    error: null,
    loading: false,
}

export const addCarReducer = (state = initialState, action: AddCarAction): AddCarState => {
    switch (action.type) {
        case AddCarActionTypes.FETCH_ADD_CAR:
            toast('Загрузка...')
            return {...state, loading: true}
        case AddCarActionTypes.FETCH_ADD_CAR_SUCCESS:
            toast.success('Успешно добавлено')
            return {...state, loading: false}
        case AddCarActionTypes.FETCH_ADD_CAR_ERROR:
            toast.error('Произошла ошибка при добавлении')
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
