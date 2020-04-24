import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <TextField />;
}

class TextField extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            product: ''

        }
    }
    render() {
        return <div>
            <p>{this.state.product}</p>
            <select value={this.state.product} onChange={this.handleChange}>
                <option value=''>----</option>
                <option value='kiwi'>kiwi</option>
                <option value='coconut'>coconut</option>
                <option value='banan'>banana</option>
                <option value='watermelon'>watermelon</option>
            </select>
            <span>{this.state.product.length}</span>
        </div>
    }
    handleChange = (event) => {
        this.setState({
            product: event.target.value
        })
    }

}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});