// Install JSON Server
//
// npm install json-server
//
// Start JSON Server
//
// json-server --watch db.json
//a potem node_modules/.bin/json-server db.json i adres z resources wrzucamy do przeglądarki



import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <CarsDbManager />;
}

class CarsDbManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: null
        };
    }

    render() {
        if(!this.state.cars)
            return null;

        let list = this
            .state
            .cars
            .map(c => <li key={c.id}>{c.brand} {c.name} <button onClick={() => this.handleClick(c.id)}>Sprzedany</button></li>)

        return <ul>{list}</ul>;
    }

    handleClick = (id) => {
        console.log('Sprzedajemy', id);

        fetch('http://localhost:3000/cars/' + id, {
            method: 'DELETE'
        }).then(() => this.setState(prevState => ({
            cars: prevState.cars.filter(c => c.id !== id)
        })));
    }

    componentDidMount() {
        fetch('http://localhost:3000/cars')
            .then(resp => resp.json())
            .then(data => this.setState({cars: data}));
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

//najpier zrobić przykłądowa tablicę z 3 autami i wyswietlić ja na stronie
// potem didMount, a w nim fetch(url lokalny, który się wyświetlil w json watch)