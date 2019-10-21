import React from 'react';
import Message from './Message';

const MessageList = (props) => {
    return (
        <div>
            {props.messages && props.messages.map((msg, key) => <Message 
            key={key} 
            message={msg} 
            toggleStarred={props.toggleStarred} 
            toggleSelected={props.toggleSelected}
            /> )}
        </div>
    )
}


export default MessageList;