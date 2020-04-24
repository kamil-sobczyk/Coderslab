//stan można zrobić tylko jeden, a potem zaprzeczenie przez !

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <MobileMenu />
}

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            div1visibility: true,
            div2visibility: false
        }
    }
    render() {
        let display1 = (this.state.div1visibility) ? 'block' : 'none';
        let display2 = (this.state.div2visibility) ? 'block' : 'none';

        return (
            <menu>
                <div style={{display: display1}} onClick={this.handleClick}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="Otwórz menu"/>
                </div>
                <div style={{display: display2}}>
                    <ul>
                        <li>Menu 1...</li>
                        <li>Menu 2...</li>
                        <li>Menu 3...</li>
                        <li>Menu 4...</li>
                    </ul>
                    <div onClick={this.handleClick}>Schowaj menu</div>
                </div>
            </menu>
        )
    }
    handleClick = () => {
        this.setState({
            div1visibility: !this.state.div1visibility,
            div2visibility: !this.state.div2visibility
        })
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});