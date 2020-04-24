import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    return <TextTyper text={'Witaj!'}/>
}

class TextTyper extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            length: 1
        }
    }
    render() {
        return <h1>{this.props.text.substr(0,this.state.length)}</h1>
    }

    componentDidMount() {
        this.intervalId=setInterval(() => {
            console.log('zmiana stanu', this.state.length);

            this.setState({
                length: this.state.length +1
            });

            if(this.state.length >= this.props.text.length) {
                clearInterval(this.intervalId);
            }

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
}


document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});