import React from 'react';
import ReactDOM from 'react-dom';

import people from './zadanie00'

function App(){
    return <PeopleList people={people}/>
}

class PeopleList extends React.Component {
    render() {
        return <ul>
            {this.props.people.map(person => <li key={person.pesel}>{person.name}</li> )}
        </ul>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});