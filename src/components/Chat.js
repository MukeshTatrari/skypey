import '../styles/Chats.css'

const Chat = ({ message }) => {
    const { text, is_user_msg } = message;
    return (
      <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
    );
  };