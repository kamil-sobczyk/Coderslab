import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <ShopItem item={this.props.product} />;
    }
}

class ShopItem extends React.Component {
    render() {
        return (
            <div>
                <ShopItemHeader item={this.props.item} />
                <ShopItemDescription item={this.props.item} />
                <ShopItemPricing item={this.props.item} />
            </div>);
    }
}

class ShopItemHeader extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.item.title}</h1>
                <img src={this.props.item.image} />
            </div>
        );
    }
}

class ShopItemDescription extends React.Component {
    render() {
        return (
            <article>
                <p>{this.props.item.description}</p>
            </article>
        );
    }
}

class ShopItemPricing extends React.Component {
    render() {
        return (
            <div>
                Cena: {this.props.item.price} zł
                <button>Kup!</button>
            </div>
        );
    }
}



document.addEventListener('DOMContentLoaded', function() {

    const kurczak = {
        title: 'Kurczak',
        image: 'https://4.imimg.com/data4/WX/CT/MY-8854554/live-chicken-500x500.jpg',
        description: 'Rosół ekologiczny.',
        price: 21.99
    };

    ReactDOM.render(
        <App product={kurczak} />,
        document.getElementById('app')
    );
});