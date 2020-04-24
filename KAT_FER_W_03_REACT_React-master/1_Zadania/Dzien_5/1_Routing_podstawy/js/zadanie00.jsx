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
                <Route path='about' component={AboutTemplate}>
                    <Route path='us' component={AboutUs} />
                    <Route path='company' component={AboutCompany} />
                </Route>
            </Route>
        </Router>
    );
}

function Main() {
    return <h1>Witaj na stronie</h1>;
}

function AboutUs() {
    return <p>Trochę więcej o nas...</p>;
}

function AboutCompany() {
    return <p>Trochę więcej na temat firmy...</p>;
}

function MainTemplate(props) {
    return (
        <div>
            <h1>Aplikacja React z React Router</h1>
            {props.children}
        </div>
    );
}

function AboutTemplate(props) {
    return (
        <div>
            <h2>O nas</h2>
            {props.children}
        </div>
    );
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});