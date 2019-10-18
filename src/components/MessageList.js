import React from 'react';
import Message from './Message';

const MessageList = (props) => {
    return (
        <div>
            {props.messages.map((msg, key) => <Message message={msg} key={key} toggleStarred={props.toggleStarred} /> )}
        </div>
    )
}


export default MessageList;