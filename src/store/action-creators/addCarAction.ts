import {Dispatch} from "redux";
import {AddCarAction, AddCarActionTypes} from "../../types/AddCarType";
import {ICar} from "../../models/ICar";
import {cars} from "../../services/axios";
import { toast } from 'react-toastify';

export const fetchAddCar = (data: ICar) => {
    return async (dispatch: Dispatch<AddCarAction>) => {
        try {
            dispatch({type: AddCarActionTypes.FETCH_ADD_CAR})
            const response = await cars.post('/car',{
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
            dispatch({type: AddCarActionTypes.FETCH_ADD_CAR_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: AddCarActionTypes.FETCH_ADD_CAR_ERROR,
                payload: 'Произошла ошибка при добавлении'
            })
        }
    }
}
