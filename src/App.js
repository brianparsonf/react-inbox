import React from 'react';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: [
                { isStarred: false, isSelected: false, isRead: false, subject: 'abc', labels: ['personal'] },
                { isStarred: true, isSelected: false, isRead: true, subject: 'react redux javascript java', labels: ['dev', 'gschool'] },
                { isStarred: false, isSelected: true, isRead: false, subject: 'blue is the sky' },
                { isStarred: false, isSelected: false, isRead: false, subject: 'whoa look at that!' }
            ]
        }
    }


    render() {
        return (
            <div className="App">
                <Toolbar />
                <MessageList messages={this.state.messages} toggleStarred={this.toggleStarred} />
            </div>
        );
    }
}

export default App;
