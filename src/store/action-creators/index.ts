import * as AddCarActionCreator from './addCarAction';
import * as RemoveCarActionCreator from './removeCarAction';
import * as GetCarModelActionCreator from './getCarModelAction';
import * as GetCarBodyActionCreator from './getCarBodyAction';
import * as GetCarsActionCreator from './getCarsAction';
import * as GetCarDetailActionCreator from './getCarDetailAction';
import * as ModalActionCreator from './modalAction';
import * as LoginActionCreator from './loginAction';
import * as EditCarActionCreator from './editCarAction';
import * as SearchCarsActionCreator from './searchCarsAction';

export default {
    ...AddCarActionCreator,
    ...RemoveCarActionCreator,
    ...GetCarModelActionCreator,
    ...GetCarBodyActionCreator,
    ...GetCarsActionCreator,
    ...GetCarDetailActionCreator,
    ...ModalActionCreator,
    ...LoginActionCreator,
    ...EditCarActionCreator,
    ...SearchCarsActionCreator,
}
