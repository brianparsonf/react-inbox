import React from 'react';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import './App.css';

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            messages: [
                { id: 1, isStarred: false, isSelected: false, isRead: false, subject: 'abc', labels: ['personal'] },
                { id: 2, isStarred: true, isSelected: false, isRead: true, subject: 'react redux javascript java', labels: ['dev', 'gschool'] },
                { id: 3, isStarred: false, isSelected: true, isRead: false, subject: 'blue is the sky', labels: [] },
                { id: 4, isStarred: false, isSelected: false, isRead: false, subject: 'whoa look at that!', labels: [] },
                { id: 5, isStarred: true, isSelected: false, isRead: false, subject: 'whfsgndfgnd fhat!', labels: [] }
            ]
        }
    }

    updateReadStatus = (isRead) => {
        this.setState(prevState => ({
            messages: prevState.messages.map(m => {
                if (m.isSelected) {
                    m.isRead = isRead
                }
                return m;
            })
        }))
    }

    toggleAllSelect = () => {
        const SELECT_THEM_ALL = true;
        const DESELECT_THEM_ALL = false;
        const updatedSelectedState = this.isAllSelected() ? DESELECT_THEM_ALL : SELECT_THEM_ALL;
        this.setState(prevState => ({
                messages: prevState.messages.map(m => {
                    m.isSelected = updatedSelectedState;
                    return m;
                })
            })
        )
    }

    isAllSelected = () => !this.isAnyNotSelected();

    isAnyNotSelected = () => {
        const countNotSelected = this.state.messages.reduce((sum, msg) => sum + (!msg.isSelected) ? 1 : 0, 0);
        return countNotSelected > 0;
    }

    toggleStarred = (id) => {
        this.setState(prevState => ({
            messages: prevState.messages.map(m => {
                if (m.id === id) {
                    m.isStarred = !m.isStarred
                }
                return m;
            })
        }))
    }

    toggleSelected = (id) => {
        this.setState(prevState => ({
            messages: prevState.messages.map(e => {
                if (e.id === id) {
                    e.isSelected = !e.isSelected
                }
                return e;
            })
        }))
    }

    deleteSelected = () => {
        this.setState(prevState => ({
            messages: prevState.messages.filter(m => !m.isSelected)
        }))
    }

    addLabelToSelected = (label) => {
        this.setState(prevState => ({
            messages: prevState.messages.map(m => {
                if (m.isSelected) {
                    m.labels = Array.from(new Set(m.labels).add(label))
                }
                return m;
            })
        }))
    }

    removeLabelFromSelected = (label) => {
        this.setState(prevState => ({
            messages: prevState.messages.map(m => {
                if (m.isSelected) {
                    m.labels = m.labels.filter(l => l !== label)
                }
                return m;
            })
        }))
    }

    countUnreadMessages = () => this.state.messages.reduce((sum, m) => (m.isRead) ? sum : sum+1, 0);

    countSelectedMessages = () => this.state.messages.reduce((sum, m) => (m.isSelected) ? sum+1 : sum, 0);

    render() {
        console.log(this.state.messages);
        return (
            <div className="App">
                <Toolbar 
                    unreadCount={this.countUnreadMessages()}
                    selectedCount={this.countSelectedMessages()}
                    messagesCount={this.state.messages.length}
                    toggleAllSelect={this.toggleAllSelect} 
                    updateReadStatus={this.updateReadStatus}
                    deleteSelected={this.deleteSelected}
                    addLabelToSelected={this.addLabelToSelected}
                    removeLabelFromSelected={this.removeLabelFromSelected}
                />
                <MessageList 
                    messages={this.state.messages} 
                    toggleStarred={this.toggleStarred} 
                    toggleSelected={this.toggleSelected}
                />
            </div>
        );
    }
}

export default App;
