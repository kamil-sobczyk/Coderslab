// conter co 2 s sie updejtujr, jst to przekazywane do komponenty, zminija si epropsy,
//
//     willupdet, didupdete, component willreceiveprops, shouldcomponentupdate
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 2000)
    }

    render() {
        return <LifeCyclesTester text={this.state.counter} />
    }
}

class LifeCyclesTester extends React.Component {
    constructor(props) {
        super(props);
        console.log('konstruktor')
    }

    componentWillMount() {
        console.log ('komponent będzie zamontowany')
    }

    render() {
        console.log('renderowanie');
        return null
    }

    componentDidMount(){
        console.log('komponent został zamontowany')
    }

    componentWillUnmount() {
        console.log('komponent odmontowywany');
    }

    componentWillReceiveProps(nextProps){
        console.log('komponent za chwilę otrzyma nowy zestaw props');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('własnie zmienił się obiekt props');
        return true
    }

    componentWillUpdate() {
        console.log('komponent zostanie zaktualizowany');
    }

    componentDidUpdate(){
        console.log('komponent został zaktualizowany');
    }


}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});