import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <Switch count={7} />;
}

class Switch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elemenents: Array(this.props.count)
                .fill({})
                .map((_,i) => ({ id: i, disabled: false }))
        };
    }

    render() {
        const list = this.state
            .elemenents
            .map(el => <li key={el.id}><button
                disabled={el.disabled}
                onClick={() => this.handleClick(el.id)}>{el.id}</button></li>);

        return (
            <ul>
                {list}
            </ul>
        );
    }

    handleClick = (id) => {
        console.log('ID', id);

        this.setState(prevState => ({
            elemenents: prevState.elemenents.map(e => ({
                id: e.id,
                disabled: e.id === id
            }))
        }));
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
