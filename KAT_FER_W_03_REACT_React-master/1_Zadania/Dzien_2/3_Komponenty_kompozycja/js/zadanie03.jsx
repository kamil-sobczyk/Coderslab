import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <div>
            <Message messageText={'komunikat1'}/>
            <Message messageText={'komunikat2'}/>
            <Button text={'zaloguj'}/>
            <Button text={'zarejestruj'}/>
        </div>
    }
}

class Message extends React.Component {
    render() {
        return <div>
            <Button text={"TAK"}/>
            <Button text={"NIE"}/>
            <p>{this.props.messageText}</p>
        </div>
    }
}

class Button extends React.Component {
    render() {
        return <button>{this.props.text}</button>
    }
}


document.addEventListener('DOMContentLoaded', function(){
        ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});