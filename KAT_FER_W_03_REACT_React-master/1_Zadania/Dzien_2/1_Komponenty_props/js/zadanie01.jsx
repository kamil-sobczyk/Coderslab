import React from 'react';
import ReactDOM from 'react-dom';

function AddNumbers (props) {
    return <h1>{props.numberA} + {props.numberB} = {props.numberA + props.numberB}</h1>;
}

class AddNumbers2 extends React.Component {
    render() {
        return <h1>{this.props.numberA} + {this.props.numberB} = {this.props.numberA + this.props.numberB}</h1>
    }
}


document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div>
            <AddNumbers numberA={3} numberB={4}/>
            <AddNumbers2 numberA={1} numberB={2}/>
        </div>,
        document.getElementById('app')
    );
});