import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    return <Sum />
}

//niekontrolowany

// class Sum extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             numbers:[]
//         }
//     }
//     render() {
//         return <div>
//             <input type='number' ref={input=>this.input=input}/>
//             <button onClick={this.handleClick}>DODAJ</button>
//             <ul>{this.state.numbers.map((e,i)=> <li key={i}>{e}</li>)}</ul>
//             <h1>{this.state.numbers.reduce((a,b)=> a + b, 0)}</h1>
//         </div>
//     }
//
//     handleClick = () => {
//         console.log(this.input.value);
//         this.setState((prevState) => ({
//             numbers: [...prevState.numbers, Number(this.input.value)]
//         }))
//     }
// }


//kontrolowany
class Sum extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            values: [],
            number: ''
        }
    }
    render(){
        return <div>
            <input type='number' value={this.state.number} onChange={this.handleChange}/>
            <button onClick={this.handleClick}>DODAJ</button>
            <ul>
                {this.state.values.map((el,i) => <li key={i}>{el}</li>)}
            </ul>
            <h1>{this.state.values.reduce((a,b)=> a + b, 0)}</h1>
        </div>
    }

    handleChange = (event) => {
        this.setState({
        number: event.target.value
        })};

    handleClick = () =>{
        this.setState((prevState) => ({
            values: [...prevState.values, Number(this.state.number)]
        }))
    };
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});