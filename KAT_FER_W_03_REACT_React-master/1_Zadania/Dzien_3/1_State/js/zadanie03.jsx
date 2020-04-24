import React from 'react';
import ReactDOM from 'react-dom';

function App () {
    return <StrobeLight color={'pink'} frequency={200}/>
}

class StrobeLight extends React.Component {
    constructor(props) {
        super (props);
        this.state={
            isOn:false
        }
    }

    render() {
        let divStyle= {
            width: '500px',
            height: '50px',
            backgroundColor: this.state.isOn ? this.props.color : 'white' //jeśli jest on to daj kolor z propsa, else: daj mu biały
        };
        return <div style={divStyle}></div>
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                isOn: !this.state.isOn
            })
        },this.props.frequency)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});