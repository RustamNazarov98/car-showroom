import {GetCarDetailAction, GetCarDetailState,GetCarDetailActionTypes } from "../../types/GetCarDetailType";
import {toast} from "react-toastify";

const initialState : GetCarDetailState = {
    car: {
        price: 0,
        image: '',
        name: '',
        cylinder: 0,
        fuel: 0,
        transmission: 0,
        description: '',
        model: '',
        body: '',
        volume: '',
        mileage: '',
        doors: '',
        phone_number: '',
        id: '',
        year: '',
        production:'',
        code: '',
    },
    error: null,
    loading: false,
}

export const getCarDetailReducer = (state = initialState, action: GetCarDetailAction): GetCarDetailState => {
    switch (action.type) {
        case GetCarDetailActionTypes.FETCH_GET_CAR_DETAIL:
            return {...state, loading: true}
        case GetCarDetailActionTypes.FETCH_GET_CAR_DETAIL_SUCCESS:
            return {...state, loading: false, car: action.payload}
        case GetCarDetailActionTypes.FETCH_GET_CAR_DETAIL_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
