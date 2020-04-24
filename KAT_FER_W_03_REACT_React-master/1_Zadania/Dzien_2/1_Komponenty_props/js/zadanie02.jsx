import React from 'react';
import ReactDOM from 'react-dom';

class Sum extends React.Component {
    render(){
        return <h1>{this.props.numbers.reduce((prev, curr) => prev + curr, 0)}</h1>
    }
}


function Sum2(props) {
    return <h1>{props.numbers.reduce((a,b) => a+b,0)}</h1>
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
            <Sum numbers = {[1,2,3,4,10]} />
            <Sum2 numbers = {[2,5,96,87]}/>
        </div>,
        document.getElementById('app')
    );
});