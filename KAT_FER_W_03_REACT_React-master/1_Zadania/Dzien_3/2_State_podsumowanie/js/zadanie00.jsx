import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <Clock/>
}

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            today: new Date()
        }
    }
    render() {
        return <div>
            <ClockTime time={this.state.today}/>
            <ClockDate date={this.state.today}/>
        </div>
    }

    componentDidMount() {
        this.intervalId= setInterval(() => {
            this.setState({
                today: new Date()
            })
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
}

class ClockTime extends React.Component {
    render () {
        return <h1>{this.props.time.toLocaleTimeString()}</h1>
    }
}

class ClockDate extends React.Component {
    render () {
        return <h1>{this.props.date.toLocaleDateString()}</h1>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);


