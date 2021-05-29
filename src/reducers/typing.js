import { SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE, SEND_EDITED_MESSAGE } from '../actions/action-types';


export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    case SEND_EDITED_MESSAGE:
      return "";
    default:
      return state;
  }
}