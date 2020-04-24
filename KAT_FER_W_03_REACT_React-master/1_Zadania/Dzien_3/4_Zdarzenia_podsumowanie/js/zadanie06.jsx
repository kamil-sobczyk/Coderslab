import React from 'react';
import ReactDOM from 'react-dom';

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min );
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function App() {
    return <MathQuestionGame />
}

class MathQuestionGame extends React.Component {

    constructor(props) {
        super(props);

        const signs = ['+', '-', '*'];
        const sign = signs[getRandom(0, signs.length)];
        const number1 = getRandom(0, 11);
        const number2 = getRandom(0, 11);
        const result = this.calculate(sign, number1, number2);

        let options = [result];

        while(options.length < 4) {
            let candidate = getRandom(-100, 100);
            if(options.indexOf(candidate) === -1) {
                options.push(candidate);
            }
        }

        shuffle(options);

        this.state = {
            result: result,
            options: options,
            text: number1 + ' ' + sign + ' ' + number2 + ' =',
            timeLeft: 10,
            timeout: false
        };
    }

    calculate (sign, number1, number2) {
        if(sign === '+')
            return number1 + number2;
        if(sign === '-')
            return number1 - number2;
        if(sign === '*')
            return number1 * number2;
    }

    render() {
        const options = this.state.options.map(o => <button key={o} onClick={(event) => this.checkResult(event, o)} disabled={this.state.timeout}>{o}</button>)
        return (
            <div>
                <h1>{this.state.text}</h1>
                <div>{options}</div>
                <h2>{this.state.timeLeft}</h2>
            </div>
        );
    }

    checkResult (result) {
        clearInterval(this.intervalId);
        this.setState({
            text: this.state.result === result ? 'Gratulacje!' : 'Błędna odpowiedź :(',
            timeout: true
        });
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
                timeLeft: prevState.timeLeft - 1,
                timeout: prevState.timeLeft - 1 <= 0
            }), () => {
                if(this.state.timeout) {
                    clearInterval(this.intervalId);
                    this.setState({text: 'Czas minął!'});
                }
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});