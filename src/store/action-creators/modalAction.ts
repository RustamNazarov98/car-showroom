import {ModalAction, ModalActionTypes} from "../../types/ModalType";

export function showModal(): ModalAction {
    return {
        type: ModalActionTypes.SHOW_MODAL,
    };
}

export function hideModal(): ModalAction {
    return {
        type: ModalActionTypes.HIDE_MODAL,
    };
}
