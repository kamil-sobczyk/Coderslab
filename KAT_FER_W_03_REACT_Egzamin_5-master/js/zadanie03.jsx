import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return <Surprise/>
    }
}
class Surprise extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: 'Wait for it...'
        }
    }

    render(){
        return <h1>{this.state.text}</h1>
    }

    componentDidMount(){
        this.timerId = setTimeout(() => {
            this.setState({
                text: 'Surprise'
            }
            )}, 5000)
    }

    componentWillUnmount() {
        clearTimeout(this.timerId);
    }
}


//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});