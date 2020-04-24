import React from 'react';
import ReactDOM from 'react-dom';

function App () {
    return <ButtonCounter/>
}

class ButtonCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            counter: 0
        }
    }
    render() {
        return <div>
            <h1>{this.state.counter}</h1>
            <ButtonToClick onClick={this.handleBtnClick}/>
            <ButtonToClick onClick={this.handleBtnClick}/>
        </div>
    }
    handleBtnClick = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }
}

class ButtonToClick extends React.Component {
    handleBtnClick = () => {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    }
    render() {
        return <div>
            <button onClick={this.handleBtnClick}>klik</button>
        </div>
    }

}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});