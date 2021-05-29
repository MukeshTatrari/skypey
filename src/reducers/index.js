import user from "./user";
import contacts from "./contacts";
import messages from "./messages";
import activeUserId from "./activeUserId";
import editMessage from './editMessage';
import typing from './typing'
import { combineReducers } from "redux";


export default combineReducers({
  user,
  contacts,
  messages,
  editMessage,
  typing,
  activeUserId
});

