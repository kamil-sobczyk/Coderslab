import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    render() {
        return <ShopList menu={this.props.products} />
    }
}

class ShopList extends React.Component {
    render() {
        let list = this.props.menu.map(e=> <ShopItemHeader item={e}></ShopItemHeader>);
        return <div className="shoplist">
            {list}
        </div>
    }
}

class ShopItemHeader extends React.Component {
    render() {
        return <div>
            <h1>{this.props.item.title}</h1>
            <img src={this.props.item.image}/>

        </div>
    }
}



document.addEventListener('DOMContentLoaded', function(){
    let items = [
        {
            title   :   'Mysz komputerowa',
            image   :   'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
        },
        {
            title   :   'Klawiatura',
            image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
        },
        {
            title   :   'Laptop programisty',
            image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
        }
    ];

    ReactDOM.render(
        <App products={items} />,
        document.getElementById('app')
    );
});