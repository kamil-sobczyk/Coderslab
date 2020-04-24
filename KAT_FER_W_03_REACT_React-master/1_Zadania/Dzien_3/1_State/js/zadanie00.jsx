import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <HelloWorld/>

}

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello, World!'
        }
    }
    render() {
        console.log('render');
        return <h1>{this.state.text}</h1>
    }

    componentDidMount () {
        console.log('did mount');
        this.timerId= setTimeout(() => {
            this.setState({
                text: 'Hi, everyone!'
            })
        },5000)
    }

    componentWillUnmount() {
        console.log('will unmount');
        clearTimeout(this.timerId);
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});