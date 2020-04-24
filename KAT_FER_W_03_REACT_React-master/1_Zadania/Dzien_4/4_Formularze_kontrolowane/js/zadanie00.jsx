import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <HelloName />;
}

class HelloName extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: 'Ty'
        }
    }
    render() {
        return <div>
            <input type='text' value={this.state.name} onChange={this.handleChange}/>
            <h1>Hello {this.state.name}</h1>
        </div>
    }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});