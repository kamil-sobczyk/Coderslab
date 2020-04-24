import React from 'react';
import ReactDOM from 'react-dom';

import people from './zadanie01'

function App(){
    return <PeopleList2 people={people}/>
}



class PeopleList2 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            peopleArray: this.props.people
        }
    }
    render() {
        return <div>
            <ul>
                {this.props.people.map(person=><li key={person.height}>{person.name}</li>)}
            </ul>
            <button onClick={this.handleClick}>ODWRÓć</button>
        </div>
    }
    handleClick = () => {
        this.setState(prevState => ({
            people: prevState.peopleArray.reverse()
        }))
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});