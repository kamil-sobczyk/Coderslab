import React from 'react';
import ReactDOM from 'react-dom';
import fakeAPI from './zadanie01';


function App() {
    return <AccountData />
}

class AccountData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false
        };
    }

    componentDidMount() {
        fakeAPI.load().then((data) => {
            this.setState({
                data: data
            })
        });
    }

    render() {
        if(!this.state.data)
            // return null;
            return <div>LOADING...</div>

        const rows = this.state.data.map((r, i) => <tr key={i}><td>{r.day}</td><td>{r.balance}</td><td>{r.change}</td></tr>);
        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        )
    }


}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});