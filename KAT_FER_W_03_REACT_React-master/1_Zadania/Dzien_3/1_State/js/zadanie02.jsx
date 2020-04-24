import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <TextTyper text='Witaj!' reversed={true}/>
}

class TextTyper extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            length: this.props.text.length
        }
    }

    componentDidMount() {
        this.intervalId= setInterval(()=> {
            console.log('Zmiana stanu', this.state.length);

           this.setState({
              length: this.state.length -1
           });


            if(this.state.length === 0) {
                clearInterval(this.intervalId);
            }

        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        return <h1>{this.props.text.substr(0,this.state.length)}</h1>
    }
}

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});