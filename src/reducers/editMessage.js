import { initial } from "lodash";
import { EDIT_MESSAGE, SEND_EDITED_MESSAGE, SEND_MESSAGE } from "../actions/action-types";

let initialState = {
  message: "",
  messageId: null,
  userId: "",
  isEdited: false
}

export default function editMessage(state = { initialState }, action) {
  switch (action.type) {
    case EDIT_MESSAGE:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    case SEND_EDITED_MESSAGE:
      return "";
    default:
      return state;
  }
}