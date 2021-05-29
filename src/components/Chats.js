import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { editUserMessage, deleteMessage } from "../actions";
import store from "../store";
import "../styles/Chats.css";

const Chat = ({ message, messageId }) => {
    const { text, is_user_msg } = message;
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
            onClick={(e) => editUsersMessage(text, messageId)}>
            {text}
            <button onClick={e => {
                e.stopPropagation()
                deleteUserMessage(messageId)
            }}>X
             </button>
        </span>
    );
};

const editUsersMessage = (text, messageId) => {
    const state = store.getState();
    const { activeUserId } = state;
    store.dispatch(editUserMessage(text, activeUserId, messageId));
}

const deleteUserMessage = (messageId) => {
    const state = store.getState();
    const { activeUserId } = state;
    store.dispatch(deleteMessage(activeUserId, messageId));
}

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };
    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} messageId={message.number} />
                ))}
            </div>
        );
    }
}



export default Chats;