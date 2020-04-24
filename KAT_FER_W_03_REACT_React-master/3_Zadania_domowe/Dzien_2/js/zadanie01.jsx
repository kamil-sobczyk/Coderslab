import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'green'
        };
    }
    componentDidMount(){
        this.timeOut = setTimeout(() => {
            this.setState({
                color: 'red'
        })
        },5000);
    }

    render(){
        return <div style={{backgroundColor: this.state.color, width: '100px', height: '100px'}}>{this.state.color}{this.timeOut}</div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );


});