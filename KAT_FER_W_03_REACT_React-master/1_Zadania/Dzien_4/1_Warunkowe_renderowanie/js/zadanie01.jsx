import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <div>
        <NumberInfo number={1}/>
        <NumberInfo number={2}/>
        <NumberInfo number={5}/>
        <NumberInfo number={7}/>
        <NumberInfo number={10}/>
        <NumberInfo number={16}/>
    </div>
}
class NumberInfo extends React.Component {

     isPrime(num) {
        let primes = [2,3,5,7,11,13,19];
        return primes.indexOf(num) > -1 //zwróć liczbę, jeśli znajduje się w tablicy
    }

    render() {
        return <h1>{this.props.number},
            {(this.props.number%2 === 0) ? 'parzysta' : 'nieparzysta'},
            {this.isPrime(this.props.number) && 'liczba pierwsza'}
        </h1>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});