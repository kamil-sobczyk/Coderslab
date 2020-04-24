import React from 'react';
import ReactDOM from 'react-dom';

let array = ['blue', 'black', 'green', 'white', 'red'];

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div>{array.join(", ")}</div>,
        document.getElementById('app')
    );



});


// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     render() {
//         return <div>{ this.props.colors.join(', ') }</div>
//     }
// }
//
// document.addEventListener('DOMContentLoaded', function(){
//
//     let colors = ['red', 'blue', 'yellow', 'orange', 'black'];
//
//     ReactDOM.render(
//         <App colors={colors} />,
//         document.getElementById('app')
//     );
// });