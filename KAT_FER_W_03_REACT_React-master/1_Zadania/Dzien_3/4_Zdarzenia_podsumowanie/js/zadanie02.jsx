import React from 'react';
import ReactDOM from 'react-dom';

// function App() {
//     return <MyComponent/>
// }
//
// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state= {
//             bgColor: 'green',
//             height: '200px'
//         }
//     }
//
//     render() {
//         let divStyle = {
//             backgroundColor: this.state.bgColor,
//             height: this.state.height,
//             width: '500px'
//         };
//         return <div style={divStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}></div>
//     }
//     handleMouseEnter = () => {
//         this.setState({
//             bgColor: 'blue',
//             height: '400px'
//         })
//     };
//     handleMouseLeave = () => {
//         this.setState({
//             bgColor: 'green',
//             height: '200px'
//         })
//     }
// }

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            background: 'green',
            width: '250px',
            height: '100px'
        }
    }
    handleMouseOver = () =>{
        // console.log('mouse over');
        this.setState({background: 'blue', height: '200px'});
    }
    handleMouseOut = () =>{
        // console.log('mouse out');
        this.setState({background: 'green', height: '100px'});
    }
    render(){
        return <Rectangle
            style={{background: this.state.background, width: this.state.width, height: this.state.height}}
            onMouseEnter={this.handleMouseOver}
            onMouseLeave={this.handleMouseOut}
        />
    }
}

class Rectangle extends React.Component{
    render(){
        return <div
            style={this.props.style}
            onMouseLeave={this.props.onMouseLeave}
            onMouseEnter={this.props.onMouseEnter}>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});