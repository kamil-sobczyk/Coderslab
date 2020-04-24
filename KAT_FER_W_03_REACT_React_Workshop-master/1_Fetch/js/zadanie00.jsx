import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <BookInfo isbn="0747532699" />
            <BookInfo isbn="9780132350884" />
        </div>
    );
}

class BookInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volumeInfo: null
        };
    }

    render() {
        if(!this.state.volumeInfo)
            return null;

        return (
            <div>
                <h1>{this.state.volumeInfo.title}</h1>
            </div>
        );
    }

    componentDidMount() {
        const url = 'https://www.googleapis.com/dfasdfbooks/v1/volumes?q=isbn:' + this.props.isbn;

        fetch(url)
            .then(resp => {
                console.log('Response', resp);
                if(resp.ok)
                    return resp.json();
                else
                    throw new Error('Błąd');
            })
            .then(data => this.setState({ volumeInfo: data.items[0].volumeInfo }))
            .catch(err => console.log('Wystąpił błąd', err));

    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});