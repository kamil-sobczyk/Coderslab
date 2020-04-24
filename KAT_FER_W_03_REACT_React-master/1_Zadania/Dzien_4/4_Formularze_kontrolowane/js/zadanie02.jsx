import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <InteractiveDiv />;
}

class InteractiveDiv extends React.Component {
    constructor(props){
        super(props);
        this.state={
            width: ''

        }
    }
    render() {
        let divStyle={
            height: '100px',
            backgroundColor: 'red',
            width: Number(this.state.width) + 'px'
        };
        return <div>
            <input type='number' value={this.state.width} onChange={this.handleChange}/>
            <div style={divStyle}></div>
        </div>
    }
    handleChange = (event) => {
        this.setState({
            width: event.target.value
        })
    }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});