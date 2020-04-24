import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <ThreeButtons />;
}

class ThreeButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: 'klik!',
            width: null
        }
    }

    render() {
        return <div>
            <button onClick={()=> console.log('Pierwszy przycisk kliknięty')}>{this.state.label}</button>
            <button onClick={this.handleBtn2Click}>{this.state.label}</button>
            <button onClick={this.handleBtn3Click} style={{width: this.state.width}}>{this.state.label}</button>
        </div>
    }

    handleBtn2Click = () => {
        this.setState({
            label: 'Click'
        })
    };

    handleBtn3Click = () => {
        this.setState ({
            width: '300px'
        })
    }
}

// class ThreeButtons extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             label: 'Klik!',
//             width: null
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={() => console.log('Pierwszy przycisk kliknięty')}>{this.state.label}</button>
//                 <button onClick={this.handleButton2Click}>{this.state.label}</button>
//                 <button onClick={this.handleButton3Click} style={{width: this.state.width}}>{this.state.label}</button>
//             </div>
//         );
//     }
//
//     handleButton2Click = () => {
//         this.setState({label: 'Click!'});
//     };
//
//     handleButton3Click = () => {
//         this.setState({width: '300px'});
//     }
// }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});