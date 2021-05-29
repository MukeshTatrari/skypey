import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, DELETE_MESSAGE, SEND_MESSAGE, EDIT_MESSAGE, SEND_EDITED_MESSAGE } from './action-types';

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
})

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
})

export const editUserMessage = (message, userId, messageId) => ({
  type: EDIT_MESSAGE,
  payload: {
    message,
    userId,
    messageId
  }
})

export const deleteMessage = (dUserId, deleteMessageId) => ({
  type: DELETE_MESSAGE,
  payload: {
    dUserId,
    deleteMessageId
  }
})

export const editMessage = (editedMessage, currentUserId, messageId, isEdited) => ({
  type: SEND_EDITED_MESSAGE,
  payload: { editedMessage, currentUserId, messageId, isEdited: true }
})