import { SET_PROCEDURE_MODAL } from "../../actions/procedure";

const initialState = {
  isOpenModal: false,
  modalType: "",
};

const procedure = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROCEDURE_MODAL:
      return {
        ...state,
        isOpenModal: action.data.isOpen,
        modalType: action.data.modalType,
      };
    default:
      return state;
  }
};

export default procedure;
