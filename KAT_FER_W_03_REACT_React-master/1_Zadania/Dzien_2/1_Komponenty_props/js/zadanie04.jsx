import React from 'react';
import ReactDOM from 'react-dom';

function Menu(props) {
    const elements = props.menu.map(e => <li key={e.url}><a href={e.url}>{e.text}</a></li>);
    return(
        <div>
            <ul>{ elements }</ul>
        </div>
    )
}

class Menu2 extends  React.Component {
    render() {
        return <div>
            <ul>
                {this.props.menu.map(e=><li><a href={e.url}>{e.text}</a></li>)}
            </ul>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const menu = [
        {
            url     :   '/',
            text    :   'Strona główna'
        },
        {
            url     :   '/blog',
            text    :   'Blog'
        },
        {
            url     :   '/pricing',
            text    :   'Cennik'
        },
        {
            url     :   '/contact',
            text    :   'Kontakt'
        }
    ];

    ReactDOM.render(
        <div>
            <Menu menu={menu} />
            <Menu2 menu={menu}/>
        </div>,
        document.getElementById('app')
    );
});