import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <SpeedClickGame time={2010} />;
}

class SpeedClickGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            time: this.props.time,
            points: 0
        };
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} disabled={this.state.time <= 0}>Click me!</button>
                <h1>Pozostały czas: {this.state.time}</h1>
                <h2>Punkty: {this.state.points}</h2>
            </div>
        );
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState(prevState => ({
                time: Math.max(prevState.time - 50, 0)
            }), () => {
                if(this.state.time <= 0) {
                    clearInterval(this.timerId);
                }
            });
        }, 50);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handleClick = () => {
        this.setState((prevState, props) => ({
            points: prevState.points + 1,
            time: props.time - 50 * (prevState.points + 1)
        }));
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});