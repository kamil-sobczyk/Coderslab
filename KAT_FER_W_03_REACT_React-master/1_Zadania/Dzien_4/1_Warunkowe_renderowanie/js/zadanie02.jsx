import React from 'react';
import ReactDOM from 'react-dom';


function App() {
    return <NumberRandomInfo />;
}

class NumberRandomInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            number:0
        }
    }
    render() {
        return <div>{this.state.number} {this.state.number>3 ? 'większe od 3' : 'mniejsze od 3'}</div>
    }

    componentDidMount() {
        this.intervalId= setInterval(() => {
            let randomNumber = Math.ceil(Math.random() * 5 );
            this.setState({
                number: randomNumber
                })
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});