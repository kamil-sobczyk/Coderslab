import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <Shop />;
}


class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['a', 'b', 'c']
        };
    }

    render() {
        return (
            <div>
                <ShopItem title="skarpetki" onBuy={this.handleBuy} />
                <ShopItem title="koszula" onBuy={this.handleBuy} />
                <ShopItem title="pończochy" onBuy={this.handleBuy} />
                <ul>
                    {this.state.items.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
            </div>
        );
    }
    handleBuy = (newItem) => {
        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }));
    }
}

class ShopItem extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleClick}>Kup</button>
            </div>
        );
    }

    handleClick = () => {
        if(typeof this.props.onBuy === 'function') {
            this.props.onBuy(this.props.title);
        }
    }
}


    document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});