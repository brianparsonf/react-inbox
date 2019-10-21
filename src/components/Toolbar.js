import React from 'react';


class Toolbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedAddLabel: '__DEFAULT__',
            defaultSelected: true
        }
    }

    toggleAllSelect = () => {
        this.props.toggleAllSelect();
    }

    markAsRead = () => {
        this.props.updateReadStatus(true);
    }

    markAsUnread = () => {
        this.props.updateReadStatus(false);
    }

    deleteSelected = () => {
        this.props.deleteSelected();
    }

    changedAddLabel = (e) => {
        this.props.addLabelToSelected(e.target.value);
    }

    changedRemoveLabel = (e) => {
        this.props.removeLabelFromSelected(e.target.value);
    }

    render() {
        console.log(this.props);
        return (
            <div className="row toolbar">
                <div className="col-md-12">
                    <p className="pull-right">
                        <span className="badge badge">{this.props.unreadCount}</span>
                        unread message{this.props.unreadCount === 1 ? '' : 's'}
                    </p>
    
                    <button className="btn btn-default"
                        onClick={this.toggleAllSelect}
                    >
                        <i className={`fa 
                        ${ (this.props.selectedCount < 1) ? 
                            'fa-square-o' :
                            this.props.selectedCount < this.props.messagesCount ? 
                                'fa-minus-square-o' : 
                                'fa-check-square-o'
                        }
                        `}></i>
                    </button>
    
                    <button className="btn btn-default"
                        onClick={this.markAsRead}
                    >
                        Mark As Read
                    </button>
    
                    <button className="btn btn-default"
                        onClick={this.markAsUnread}
                    >
                        Mark As Unread
                    </button>
    
                    <select className="form-control label-select"
                        value="__DEFAULT__"
                        onChange={this.changedAddLabel}
                    >
                        <option value="__DEFAULT__">Apply label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
    
                    <select className="form-control label-select"
                        value="__DEFAULT__"
                        onChange={this.changedRemoveLabel}
                    >
                        <option value="__DEFAULT__">Remove label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
    
                    <button className="btn btn-default"
                        onClick={this.deleteSelected}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        )
    }
}


export default Toolbar;