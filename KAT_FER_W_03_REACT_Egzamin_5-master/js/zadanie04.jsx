import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return <PizzaToppings />;
    }
}

class PizzaToppings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            offerToppings: ['Sos pomidorowy', 'Ananas', 'Kukurydza', 'Pomidor'],
            selectedToppings: []
        };
    }

    render(){
        const offer = this.state.offerToppings.map( (topping, index) => {
            return <li key={index} onClick={e => this.handleClick(e, 'offerToppings', 'selectedToppings', topping, index)}>
                {topping}
            </li>;
        });
        const selected = this.state.selectedToppings.map( (topping, index) => {
            return <li key={index} onClick={e => this.handleClick(e, 'selectedToppings', 'offerToppings', topping, index)}>
                {topping}
            </li>;
        });

        return <div>
            <h1>Do wyboru</h1>
            <ul>
                {offer}
            </ul>
            <h1>Wybrane</h1>
            <ul>
                {selected}
            </ul>
        </div>;
    }
    handleClick = (e, from, to, topping, index) => {
        let offerCopy = this.state[from].slice();
        let selectedCopy = this.state[to].slice();

        offerCopy.splice(index, 1);
        selectedCopy.push(topping);

        this.setState({
            [from]: offerCopy,
            [to]: selectedCopy,
        });
    };
}


//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});