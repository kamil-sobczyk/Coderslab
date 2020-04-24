import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <MyComponent />;
}

class MyComponent extends React.Component {
    render () {
        return (
            <a href='#' onClick={e => this.handleClickButton(e, 'Some text')}>Click me!</a>
        )
    }
    handleClickButton(e,someString){
        event.preventDefault();
        console.log('event', e);
        console.log('someString', someString)

    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});