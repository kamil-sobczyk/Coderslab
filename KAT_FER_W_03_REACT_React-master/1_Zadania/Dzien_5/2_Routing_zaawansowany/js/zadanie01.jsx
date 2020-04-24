import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={MainTemplate}>
                    <IndexRoute component={Home}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/cennik' component={Pricing}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

class MainTemplate extends React.Component {
    render() {
        const linkStyle={
            border: '2px solid green'
        };
        return <div>
            <h1>Aplikacja React z React Router</h1>
            <ul>
                <li>
                    <IndexLink to='/' activeStyle={linkStyle}>Home</IndexLink>
                </li>
                <li>
                    <IndexLink to='/blog' activeStyle={linkStyle}>BLOG</IndexLink>
                </li>
                <li>
                    <IndexLink to='/cennik' activeStyle={linkStyle}>Cennik</IndexLink>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}

function Home() {
    return <h1>Witaj na stronie</h1>
}

function Blog() {
    return <h1>BLOG</h1>
}

function Pricing() {
    return <h1>Cennik</h1>
}
function NotFound() {
    return <h1>404 - nie znaleziono</h1>
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});