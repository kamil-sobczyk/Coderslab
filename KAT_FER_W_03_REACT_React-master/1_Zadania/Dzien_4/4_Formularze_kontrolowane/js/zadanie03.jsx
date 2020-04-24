import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <SelectOrType items={['BMW', 'Jaguar', 'Porshe']}/>
}

class SelectOrType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            visible: false,
            lastOption: 'inne',
            text: ''
        }
    }

    render() {
        let hidden = this.state.visible ? {display:'block'} : {display:'none'};
        return <div>
            <select value={this.state.brand} onChange={this.handleBrandChange}>
                {this.props.items.map(e=> <option value={e} key={e}>{e}</option>)}
                <option value={this.state.lastOption}>{this.state.lastOption}</option>
            </select>
            <input type='text' style={hidden} value={this.state.text} onChange={this.handleInputChange}/>
            <button style={hidden} onClick={this.handleBtnChange}>ZMIEŃ</button>
        </div>
    }
    handleBrandChange = (event) => {
        if(event.target.value == this.state.lastOption) this.setState({visible:true});
        this.setState({
            brand: event.target.value
        })
    };
    handleInputChange=(event) => {
        this.setState({
            text: event.target.value
        })
    };
    handleBtnChange = () => {
        this.setState({
            lastOption: this.state.text,
            visible: false
        })
    }

}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});