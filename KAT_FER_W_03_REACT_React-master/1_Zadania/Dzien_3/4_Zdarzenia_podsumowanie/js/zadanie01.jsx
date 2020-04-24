import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <Bulb/>;
}

class Bulb extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            bgColor: 'white',
            text: 'ON'
        }
    }
    render() {
        return <div style={{height: '100px', width: '100px', backgroundColor: this.state.bgColor}}>
            <button onClick={this.handleBtnClick}>{this.state.text}</button>
        </div>
    }

    handleBtnClick = () => {
        this.setState({
            bgColor: (this.state.bgColor) == 'white' ? 'yellow' : 'white',
            text: (this.state.text) == 'ON' ? 'OFF' : 'ON'
        })
    }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});