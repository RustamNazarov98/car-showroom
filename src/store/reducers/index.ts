import {combineReducers} from "redux";
import {addCarReducer} from "./addCarReducer";
import {getCarModelReducer} from "./getCarModelReducer";
import {getCarBodyReducer} from "./getCarBodyReducer";
import {getCarsReducer} from "./getCarsReducer";
import {getCarDetailReducer} from "./getCarDetailReducer";
import {removeCarReducer} from "./removeCarReducer";
import {modalReducer} from "./modalReducer";
import {loginUserReducer} from "./loginUser";
import {editCarReducer} from "./editCarReducer";
import {searchCarsReducer} from "./searchCarsReducer";

export const rootReducer = combineReducers({
    addCar: addCarReducer,
    carModels: getCarModelReducer,
    carBody: getCarBodyReducer,
    cars: getCarsReducer,
    carDetail: getCarDetailReducer,
    removeCar: removeCarReducer,
    modal: modalReducer,
    login: loginUserReducer,
    editCar: editCarReducer,
    searched_cars: searchCarsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
