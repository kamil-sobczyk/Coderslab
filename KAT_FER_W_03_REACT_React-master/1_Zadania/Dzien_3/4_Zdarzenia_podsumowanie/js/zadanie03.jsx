import React from 'react';
import ReactDOM from 'react-dom';

function App () {
    return <CrazyDiv/>
}

class CrazyDiv  extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            left: '0',
            top: '0'
        }
    }
    render() {
        let divStyle= {
            backgroundColor: 'red',
            height: '100px',
            width: '100px',
            position: 'absolute',
            top: this.state.top,
            left: this.state.left
        };
        return <div style={divStyle} onMouseEnter={this.handleMouseEnter}></div>
    }
    handleMouseEnter = () => {
        this.setState({
            left: getRandomPosition(),
            top: getRandomPosition()
        })
    }

}

function getRandomPosition() {
    return Math.floor(Math.random() * 1000) + 'px';
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});