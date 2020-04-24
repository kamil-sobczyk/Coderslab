import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <ShopItem/>
}

class ShopItem extends React.Component {
    render() {
        return <div>
          <ShopItemHeader title="awokado" imgUrl="http://www.maniasmakowania.pl/537-tm_large_default/awokado.jpg"/>
          <ShopItemDescription description="to jest awokado"/>
          <ShopItemPricing price="5 zł"/>
        </div>
    }
}

class ShopItemHeader extends React.Component {
    render () {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.imgUrl}/>
            </div>
    )}
    }

class ShopItemDescription extends  React.Component {
    render() {
        return <article>
        <p>{this.props.description}</p>
        </article>

    }
}

class ShopItemPricing extends React.Component {
    render() {
        return <div>
        Cena: {this.props.price}
        <button>Kup!</button>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});