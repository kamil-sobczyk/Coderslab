import React from 'react';
import ReactDOM from 'react-dom';

function Hello (props){
    return <h1 style={{color: 'red', border: '1px solid green'}}>Hello, {props.name} {props.surname}</h1>
}

class Hello2 extends React.Component {
    render(){
        return <h1 style={{color: 'red', border: '2px dotted red'}}>Hello, {this.props.name} {this.props.surname}</h1>
    }
}



document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div>
            <Hello name='magda' surname='str'/>
            <Hello2 name='jan' surname='nowak'/>
        </div>,
        document.getElementById('app')
    );
});