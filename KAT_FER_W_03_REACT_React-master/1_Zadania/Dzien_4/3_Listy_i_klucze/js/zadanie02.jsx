import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    return <Invites/>
}

class Invites extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            peopleArray: ['przykładowa osoba']
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.peopleArray.map(p => <li key={p}>{p}</li>)}
                </ul>
                <button onClick={this.handleClick}>NOWY</button>
            </div>
        )
    }

    handleClick = () => {
        let newPerson = prompt('Podaj imię i nazwisko');
        // console.log(newPerson);
        if (this.state.peopleArray.indexOf(newPerson) >-1 )
            return;  //jeśli osoba istnieje to przerywam działanie
        this.setState (prevState => ({  //w przeciwnym przypadku dodaję nową
            peopleArray: [newPerson, ...prevState.peopleArray]

        }))
    }

}

//do setState przekazuję już obiekt this.state (i nie musze tu pisać this.state.peopleArray, wystarczy samo people.Array
//ale poza setState trzeba używać this.State.peopleArray


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});