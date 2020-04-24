// //poprawne uzycie state:
//     this.state = { seconds: 0 };
//
// this.setState({ seconds: this.state.seconds + 1 }, () => {
//     // Zawsze seconds = 1
//     console.log('Sekund: ' + this.state.seconds);
// });
//
// // Czasem 0, czasem 1
// console.log('Sekund: ' + this.state.seconds);
//
// this.setState((prevState, props) => ({ seconds: prevState.seconds + 1 }));
//
// this.setState({ seconds: 10 });

//task4
//różne zminay stanów kompnentu should itd

import React from 'react';
import ReactDOM from 'react-dom';

class LifeCyclesTester extends React.Component {
    constructor(props) {
        super(props);
        console.log('konstruktor');
        this.state={
            text: 'some text'
        }
    }

    componentWillMount() {
        console.log ('komponent będzie zamontowany')
    }

    render() {
        console.log('renderowanie');
        return <h1>{this.state.text}</h1>
    }

    componentWillUpdate() {
        console.log('komponent zostanie zaktualizowany');
    }

    componentDidMount(){
        console.log('komponent został zamontowany');
        this.timerId= setTimeout(() => {
            this.setState({
                text: 'zaktualizowany state'
            })
        }, 5000)
    }

    componentDidUpdate(){
        console.log('komponent został zaktualizowany');
    }



    componentWillUnmount() {
        console.log('komponent odmontowywany');
        clearTimeout(this.timerId);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <LifeCyclesTester/>,
        document.getElementById('app')
    );
});