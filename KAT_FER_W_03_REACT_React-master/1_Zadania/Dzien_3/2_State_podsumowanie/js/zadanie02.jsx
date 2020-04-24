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




//alternatywa:
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// function App() {
//     return <StrobeControl />
// }
//
// class StrobeControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             onOff: true
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <StrobeLight color="red" frequency={100} onOff={this.state.onOff} />
//                 <StrobeLight color="green" frequency={200} onOff={this.state.onOff} />
//                 <StrobeLight color="blue" frequency={400} onOff={this.state.onOff} />
//             </div>
//         );
//     }
//
//     componentDidMount() {
//         this.intervalId = setTimeout(() => this.updateOnOff(), 5000);
//     }
//
//     updateOnOff() {
//         this.setState({ onOff: false });
//     }
//
//     componentWillUnmount() {
//         clearTimeout(this.intervalId);
//     }
// }
//
// class StrobeLight extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             color: 'white'
//         };
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount');
//         this.intervalId = setInterval(() => this.flipColor(), this.props.frequency);
//     }
//
//     flipColor() {
//         if(!this.props.onOff)
//             return;
//
//         this.setState((prevState) => ({
//             color: prevState.color === 'white' ? this.props.color : 'white'
//         }));
//     }
//
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//         clearTimeout(this.intervalId);
//     }
//
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//         clearTimeout(this.intervalId);
//     }
//
//     render() {
//         console.log('render');
//         let style = {
//             width: '500px',
//             height: '500px',
//             backgroundColor: this.state.color,
//             border: '1px solid black'
//         };
//         return <div style={style}></div>;
//     }
// }
//
// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });


