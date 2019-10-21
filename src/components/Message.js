import React from 'react';


class Message extends React.Component {
    constructor(props) {
        super();
    }

    toggleSelected = () => {
        this.props.toggleSelected(this.props.message.id);
    }

    toggleStarred = () => {
        this.props.toggleStarred(this.props.message.id);
    }

    render() {
        return (
            <div className={`row message 
            ${this.props.message.isRead ? 'read' : 'unread'} 
            ${this.props.message.isSelected ? 'selected' : ''}
            `}>
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" checked={this.props.message.isSelected ? 'checked' : ''}
                                onChange={this.toggleSelected}
                            />
                        </div>
                        <div className="col-xs-2"
                            onClick={this.toggleStarred}
                        >
                            <i className={`star fa ${this.props.message.isStarred ? 'fa-star' : 'fa-star-o'}`}></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    {this.props.message.labels && this.props.message.labels.sort().map((lbl, key) => {
                        return <span className="label label-warning" key={key}>{lbl}</span>
                    })}
                    <a href="#">
                        {this.props.message.subject}
                    </a>
                </div>
            </div>
        )
    }
}


export default Message;