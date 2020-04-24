// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router,
//     Route,
//     Link,
//     IndexLink,
//     IndexRoute,
//     hashHistory
// } from 'react-router';
// function App() {
//     return (
//         <Router history={hashHistory}>
//             <Route path='/' component={MainTemplate}>
//             </Route>
//             <Route path='/services/:service' component={ServiceInfo}/>
//             <Route path='*' component={NotFound} />
//         </Router>
//     );
// }
// function Home() {
//     return <h1>
//         <Link to="/">Home</Link>
//     </h1>;
// }
// class ServiceInfo extends React.Component {
//     render() {
//         if (this.props.params.service === "www" || this.props.params.service === "shop" || this.props.params.service === "seo") {
//             return <h1>
//                 Proponujemy usługę: {this.props.params.service}
//             </h1>
//         } else {
//             return <Home />
//         }
//     }
// }
// class NotFound extends React.Component {
//     render() {
//         return <Home />
//     }
// }
// function MainTemplate(props) {
//     const activeStyle = {
//         color: 'red'
//     };
//     return (
//         <div>
//             <h1>Aplikacja React z React Router</h1>
//             <ul>
//                 <li>
//                     <IndexLink to="/services/www" activeStyle={activeStyle}>WWW</IndexLink>
//                 </li>
//                 <li>
//                     <IndexLink to="/services/shop" activeStyle={activeStyle}>Shop</IndexLink>
//                 </li>
//                 <li>
//                     <IndexLink to="/services/seo" activeStyle={activeStyle}>Seo</IndexLink>
//                 </li>
//             </ul>
//             {props.children}
//         </div>
//     );
// }
// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });

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
                <Route path='/services/:service' component={ServiceInfo}/>
                <Route path='*' component={NotFound} />
            </Route>
        </Router>
    );
}
function Home() {
    return <h1>
        <Link to="/">Home</Link>
    </h1>;
}

class ServiceInfo extends React.Component {
    availableServices = ["www", "shop", "seo"];
    render() {
        if (this.availableServices.indexOf(this.props.params.service) > -1)
            return <h1>Proponujemy usługę: {this.props.params.service}</h1>;

        return <Home />
    }
}
class NotFound extends React.Component {
    render() {
        return <Home />
    }
}
function MainTemplate(props) {
    const activeStyle = {
        color: 'red'
    };
    return (
        <div>
            <h1>Aplikacja React z React Router</h1>
            <ul>
                <li>
                    <IndexLink to="/services/www" activeStyle={activeStyle}>WWW</IndexLink>
                </li>
                <li>
                    <IndexLink to="/services/shop" activeStyle={activeStyle}>Shop</IndexLink>
                </li>
                <li>
                    <IndexLink to="/services/seo" activeStyle={activeStyle}>Seo</IndexLink>
                </li>
            </ul>
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