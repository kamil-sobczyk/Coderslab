import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <AddTwoNumbers />;
}

class AddTwoNumbers extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            numb1: '',
            numb2: ''
        }
    }
    render() {
        return <div>
            <input type='text' value={this.state.numb1} onChange={this.handleChange1}/>
            <input type='text' value={this.state.numb2} onChange={this.handleChange2}/>
            <h1>{this.state.numb1 + this.state.numb2}</h1>
            {/*<h1>{Number(this.state.numberA) + Number(this.state.numberB)}</h1> i wtedy bez parseInt niżej*/}
        </div>
    }
    handleChange1 = (event) => {
        this.setState({
            numb1: parseInt(event.target.value)
        })
    }

    handleChange2 = (event) => {
        this.setState({
            numb2: parseInt(event.target.value)
        })
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});