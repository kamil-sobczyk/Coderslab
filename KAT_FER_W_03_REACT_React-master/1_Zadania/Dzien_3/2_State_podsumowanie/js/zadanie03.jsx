import React from 'react';
import ReactDOM from 'react-dom';

function App () {
    return <StrobeControl/>
}

class StrobeControl extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            onOff:true
        }
    }
    render () {
        return <div>
            <StrobeLight color={'pink'} frequency={300} onOff={this.state.onOff}/>
            <StrobeLight color={'green'} frequency={100} onOff={this.state.onOff}/>
            <StrobeLight color={'yellow'} frequency={200} onOff={this.state.onOff}/>
        </div>
    }
    componentDidMount(){
        this.timerId = setTimeout(() => {
            this.setState({
                onOff: false
            })
        },5000)
    }
    componentWillUnmount() {
        clearTimeout(this.timerId);
    }
}

class StrobeLight extends React.Component {
    constructor(props) {
        super (props);
        this.state={
            isOn:false
        }
    }

    render() {
        if(this.props.onOff == true) {
            var bgColor = this.state.isOn ? this.props.color : 'white'
        }
        let divStyle= {
            width: '500px',
            height: '50px',
            backgroundColor: bgColor
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

