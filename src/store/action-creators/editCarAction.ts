import {Dispatch} from "redux";
import {EditCarActionTypes, EditCarAction} from "../../types/EditCarType";
import {ICar} from "../../models/ICar";
import {cars} from "../../services/axios";
import { toast } from 'react-toastify';

export const fetchEditCar = (data: ICar) => {
    return async (dispatch: Dispatch<EditCarAction>) => {
        try {
            dispatch({type: EditCarActionTypes.FETCH_EDIT_CAR})
            const response = await cars.patch('/car',{
                "price": Number(data.price),
                "image": data.image,
                "name": data.name,
                "cylinder": Number(data.cylinder),
                "fuel": Number(data.fuel),
                "transmission": Number(data.transmission),
                "description": data.description,
                "model": Number(data.model),
                "body": Number(data.body)
            });
            dispatch({type: EditCarActionTypes.FETCH_EDIT_CAR_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: EditCarActionTypes.FETCH_EDIT_CAR_ERROR,
                payload: 'Произошла ошибка при изменении'
            })
        }
    }
}
