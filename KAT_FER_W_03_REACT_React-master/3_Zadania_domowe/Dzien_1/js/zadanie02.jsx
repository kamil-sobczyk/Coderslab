import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let name = prompt('Podaj imię');
    let age = prompt ('Podaj wiek');

    ReactDOM.render(
        <div>{name} ma {age} lat</div>,
        document.getElementById('app')
    );

});