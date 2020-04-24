import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <ParentComponent>
            <h1>To działa!</h1>
        </ParentComponent>
    );
}

class ParentComponent extends React.Component {
    render() {
        return (
            <ChildComponent>
                {this.props.children}
            </ChildComponent>
        );
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <GrandchildComponent>
                {this.props.children}
            </GrandchildComponent>
        );
    }
}

class GrandchildComponent extends React.Component {
    render() {
        return this.props.children;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});