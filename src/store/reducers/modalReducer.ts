import {ModalAction, ModalActionTypes} from "../../types/ModalType";

export const initialState = {
    modal: false,
};

export function modalReducer(state = initialState, action: ModalAction)  {
    switch (action.type) {
        case ModalActionTypes.SHOW_MODAL:
            return {
                ...state,
                modal: true,
            };
        case ModalActionTypes.HIDE_MODAL:
            return {
                ...state,
                modal: false,
            };
        default:
            return state;
    }
}

