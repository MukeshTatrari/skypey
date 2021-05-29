import { getMessages } from "../data/static-data";
import { SEND_MESSAGE, SEND_EDITED_MESSAGE, DELETE_MESSAGE } from "../actions/action-types";
import _, { toInteger } from 'lodash';
import omit from 'lodash/omit';

export default function messages(state = getMessages(10), action) {

  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = toInteger(+_.keys(allUserMsgs).pop() + 1);
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    case SEND_EDITED_MESSAGE:
      const { editedMessage, currentUserId, messageId, isEdited } = action.payload;
      const userMessages = state[currentUserId];
      return {
        ...state,
        [currentUserId]: {
          ...userMessages,
          [messageId]: {
            number: messageId,
            text: editedMessage,
            is_user_msg: true
          }
        }
      };

    case DELETE_MESSAGE:
      const { dUserId, deleteMessageId } = action.payload;
      let uMessages = state[dUserId];
      const data = omit(uMessages, deleteMessageId)
      return {
        ...state,
        [dUserId]: {
          ...data
        }
      };
    default:
      return state;
  }
}