import React, { Component } from 'react';
import store from "../store";
import { setTypingValue, sendMessage, editMessage } from "../actions";
import "../styles/MessageInput.css";


class MessageInput extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    const { value, userId, messageId } = this.props
    return (
      <form className="Message" onSubmit={messageId ? this.handleEdit(value, messageId, userId) : this.handleSubmit}>
        <input ref={this.messageInput}
          className="Message__input"
          onChange={this.handleChange}
          value={value}
          placeholder="write a message"
        />
      </form>
    )
  }

  handleChange = e => {
    const data = e.target.value;
    store.dispatch(setTypingValue(e.target.value));
  };

  handleEdit = (value, messageId, userId) => e => {
    e.preventDefault();
    store.dispatch(editMessage(value, userId, messageId, true));
    e.target.reset();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const state = store.getState();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
    e.target.reset();
  };
}

export default MessageInput;