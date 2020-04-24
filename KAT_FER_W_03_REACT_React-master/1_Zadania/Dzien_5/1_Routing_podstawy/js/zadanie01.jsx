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
        return <div>
            <h1>Aplikacja React z React Router</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blog'>BLOG</Link>
                </li>
                <li>
                    <Link to='/cennik'>Cennik</Link>
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