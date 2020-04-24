import React from 'react';
import ReactDOM from 'react-dom';

function generateRandomNumbers(min, max, count) {
    let array=[];
    for (let i=0;i<count; i++) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(number);
    }
    return array;
}

class RandomNumbers extends React.Component {
    render() {

        let numbers = generateRandomNumbers(this.props.values.min, this.props.values.max, this.props.values.count);

        console.log(numbers);
        return <div>
            <RandomNumbersInfo values={this.props.values}/>
            <RandomNumbersList numbers = {numbers}/>
        </div>
    }
}

class RandomNumbersInfo extends React.Component {
    render () {
        return <div>MIN: {this.props.values.min} MAX: {this.props.values.max} COUNT: {this.props.values.count}</div>
    }
}

class RandomNumbersList extends React.Component {
    render() {
        return <div>Generated: {this.props.numbers.join(', ')}</div>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    let values1 = {
        min: 3,
        max: 15,
        count:4
    };

    let values2 = {
        min: 30,
        max: 150,
        count:13
    };

    let values3 = {
        min: 1,
        max: 10,
        count:6
    };

    ReactDOM.render(
        <RandomNumbers values={values2}/>,
        document.getElementById('app')
    );
});