import React from 'react';
import ReactDOM from 'react-dom';


function App() {
    return <div>
        <SecretStuff pwd="1234" correctPwd='1234' secret='sekretna wiadomość, która się pokaże' />
        <SecretStuff pwd="1234" correctPwd='abcd' secret='sekretna wiadomość, która się nie pokaże' />
    </div>;
}

class SecretStuff extends React.Component {
    render(){
        if(this.props.pwd !== this.props.correctPwd)
            return null;

        return <div>{this.props.secret}</div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});