import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

function App() {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={MainTemplate}>
                <IndexRoute component={Main} />
                <Route path='/hello/:name' component={HelloYou} />
                <Route path='/checkage/:age' component={CheckAge} />
            </Route>
        </Router>
    );
}

function MainTemplate(props) {
    const activeStyle = {
        fontWeight: 'bold'
    };
    return (
        <div>
            <ul>
                <li><IndexLink to="/" activeStyle={activeStyle}>Home</IndexLink></li>
                <li><IndexLink to="/hello/Jan" activeStyle={activeStyle}>Hello Jan</IndexLink></li>
                <li><IndexLink to="/checkage/50" activeStyle={activeStyle}>CheckAge 50</IndexLink></li>
                <li><IndexLink to="/checkage/16" activeStyle={activeStyle}>CheckAge 16</IndexLink></li>
            </ul>

            {props.children}
        </div>
    );
}

function Main() {
    return <div>Witamy na naszej stronie!!!</div>;
}

function HelloYou(props) {
    return <h1>Hello, {props.params.name}</h1>;
}

function CheckAge(props) {
    return <h1>{props.params.age >= 18 ? 'Pełnoletni' : 'Niepełnoletni'}</h1>;
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});