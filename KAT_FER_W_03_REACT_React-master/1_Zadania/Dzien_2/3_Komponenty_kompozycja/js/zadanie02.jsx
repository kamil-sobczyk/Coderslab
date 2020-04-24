import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    render(){
        return <div>
            <Chat insert={this.props.content}/>
        </div>;
    }
}


class Chat extends React.Component{
    render(){
        return <div className="chat">
            <ChatHeader text={this.props.insert.headerText}/>
            <ChatMessages messages={this.props.insert.msgList}/>
            <NewChatMessage text={this.props.insert.buttonText}/>
        </div>
    }
}

class ChatHeader extends React.Component {
    render() {
        return <header>
            <h1>{this.props.text}</h1>
        </header>
    }
}

class ChatMessages extends React.Component {
    render() {
        let list = this.props.messages.map(e=><ChatMsg msg={e}></ChatMsg>)
        return  <div>
            <ul>
                {list}
            </ul>
        </div>
    }
}

class ChatMsg extends React.Component {
    render() {
        return <li>{this.props.msg}</li>
    }
}

class NewChatMessage extends React.Component{
    render () {
        return <footer>
            <input type="text"/>
            <button>{this.props.text}</button>
        </footer>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    let config = {
        headerText: "Chat prywatny",
        msgList: ['wpis z chatu 1', 'wpis z chatu 2', 'wpis z chatu 3'],
        buttonText: 'Wyślij'
    };

    ReactDOM.render(
        <App content={config}/>,
        document.getElementById('app')
    );
});