import { actionSuccess } from "../action_types";

export const SET_PROCEDURE_MODAL = "SET_PROCEDURE_MODAL";

export const setProcedureModal = (modalType, isOpen) => (dispatch) => {
  dispatch(actionSuccess(SET_PROCEDURE_MODAL, { modalType, isOpen }));
};
