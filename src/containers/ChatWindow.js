import React from "react";
import store from "../store";
import _ from "lodash";
import Chats from "../components/Chats";
import MessageInput from "./MessageInput";
import '../styles/ChatWindow.css'
import Header from '../components/Header'

const ChatWindow = ({ activeUserId }) => {
  const { contacts, messages, typing, editMessage } = store.getState();

  const { message, userId, messageId } = editMessage;
  const activeUser = contacts.contacts[activeUserId];
  const activeMsgs = messages[activeUserId];

  let messageData
  if (messageId !== null && typing === "") {
    messageData = message
  } else if ((messageId === "undefined" || messageId === "") && typing !== "") {
    messageData = typing;
  } else {
    messageData = typing;
  }

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={messageData} userId={userId} messageId={messageId} />
    </div>
  );
};

export default ChatWindow;