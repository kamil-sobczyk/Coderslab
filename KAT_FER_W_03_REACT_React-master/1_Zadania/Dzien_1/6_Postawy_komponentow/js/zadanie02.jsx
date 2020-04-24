import React from 'react';
import ReactDOM from 'react-dom';


function Menu() {
    return <div>
        <ul>
            <li><a href="#">Strona główna</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pricing">Cennik</a></li>
            <li><a href="/contact">Kontakt</a></li>
        </ul>
    </div>
}

class Menu2 extends  React.Component {
    render() {
        return <div>
            <ul>
                <li><a href="#">Strona główna</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/pricing">Cennik</a></li>
                <li><a href="/contact">Kontakt</a></li>
            </ul>
        </div>
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
            <Menu/>
            <Menu2/>
        </div>,
        document.getElementById('app')
    );
});