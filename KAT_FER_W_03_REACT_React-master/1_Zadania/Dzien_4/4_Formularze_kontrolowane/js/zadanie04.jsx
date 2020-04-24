import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <MixedData/>
}

class MixedData extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            fruit: ''
        }
    }
    render() {
        return <div>
            <input type='text' value={this.state.fruit} onChange={this.handleChange}/>
            <select value={this.state.fruit} onChange={this.handleChange}>
                <option value='banan'>banana</option>
                <option value='pineapple'>pineapple</option>
                <option value='orange'>orange</option>
            </select>
        </div>
    }
    handleChange = (event) => {
        this.setState({
            fruit: event.target.value
        })
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});