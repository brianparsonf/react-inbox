import React from 'react';


class Message extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isStarred: props.message.isStarred,
            isSelected: props.message.isSelected,
            isRead: props.message.isRead,
            labels: props.message.labels,
            subject: props.message.subject
        }
    }

    toggleStar = () => {
        this.setState((prevState, props) => {
            return {isStarred: !this.state.isStarred}
        });
    }

    render() {
        return (
            <div className={`row message 
            ${this.state.isRead ? 'read' : 'unread'} 
            ${this.state.isSelected ? 'selected' : ''}
            `}>
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" checked={this.state.isSelected ? 'checked' : ''} 
                                onChange={e => false}
                            />
                        </div>
                        <div className="col-xs-2"
                            onClick={e => this.toggleStar()}
                        >
                            <i className={`star fa ${this.state.isStarred ? 'fa-star' : 'fa-star-o'}`}></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    {this.state.labels && this.state.labels.map((lbl, key) => {
                        return <span className="label label-warning" key={key}>{lbl}</span>
                    })}
                    <a href="#">
                        {this.state.subject}
                    </a>
                </div>
            </div>
        )
    }
}


export default Message;