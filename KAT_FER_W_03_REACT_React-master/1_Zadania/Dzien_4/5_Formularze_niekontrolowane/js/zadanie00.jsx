import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <GivePassword pwd="abc123" />
}

class GivePassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amIIn: false
        };
    }

    render() {
        if (this.state.amIIn)
            return <div>
                I'm in
            </div>;

        return <div>
            <input type="password" ref={input=>this.password=input}/>
            <button onClick={this.handleClick}>LogIn</button>
        </div>
    }
    handleClick = () => {
        console.log(this.password.value);
        this.setState({
            amIIn: this.password.value === this.props.pwd
        })
    }

}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});