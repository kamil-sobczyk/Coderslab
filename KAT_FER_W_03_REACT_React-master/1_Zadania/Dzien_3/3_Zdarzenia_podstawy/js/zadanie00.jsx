import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <ComponentWithButton />
}

class ComponentWithButton extends React.Component {
    render() {
        return <button onClick={this.handleOnClick}>click</button>
    }

    handleOnClick() {
        console.log('działa!')
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});