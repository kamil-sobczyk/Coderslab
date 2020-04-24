import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <MyCheckBox />;
}

class MyCheckBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text: 'NIE'
        }
    }
    render() {
        return <button onClick={this.handleClick}>{this.state.text ? 'TAK' : 'NIE'}</button>
    }
    handleClick = () => {
        this.setState(prevState => ({
            text: !this.state.text
        }))
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});