import React from 'react';
import ReactDOM from 'react-dom';

class LifeCyclesTester extends React.Component {
    constructor(props) {
        super(props);
        console.log('konstruktor')
    }

    componentWillMount() {
        console.log ('komponent będzie zamontowany')
    }

    render() {
        console.log('renderowanie');
        return null
    }

    componentDidMount(){
        console.log('komponent został zamontowany')
    }

    componentWillUnmount() {
        console.log('komponent odmontowywany');
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <LifeCyclesTester/>,
        document.getElementById('app')
    );
});