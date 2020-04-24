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
        return <h1>
            <ClockTimeHour hour={this.props.time}/>
            <ClockTimeMinute min={this.props.time}/>
            <ClockTimeSecond sec={this.props.time}/>
        </h1>
    }
}

class ClockDate extends React.Component {
    render () {
        return <h1>
            <ClockDateYear year={this.props.date}/>
            <ClockDateMonth month={this.props.date}/>
            <ClockDateDay day={this.props.date}/>
        </h1>
    }
}

class ClockTimeHour extends React.Component {
    render() {
        return <span>{this.props.hour.getHours()}:</span>
    }
}
class ClockTimeMinute extends React.Component {
    render() {
        return <span>{this.props.min.getMinutes()}:</span>
    }
}
class ClockTimeSecond extends React.Component {
    render() {
        return <span>{this.props.sec.getSeconds()}</span>
    }
}
class ClockDateYear extends React.Component {
    render() {
        return <span>{this.props.year.getFullYear()}-</span>
    }
}
class ClockDateMonth extends React.Component {
    render() {
        return <span>{this.props.month.getMonth() + 1}-</span>
    }
}
class ClockDateDay extends React.Component {
    render() {
        return <span>{this.props.day.getDate()}</span>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);


