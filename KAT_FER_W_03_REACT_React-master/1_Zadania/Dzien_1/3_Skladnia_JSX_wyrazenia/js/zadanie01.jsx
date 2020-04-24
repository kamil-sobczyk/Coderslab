import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let birthDate= Number(prompt('Podaj rok urodzenia'));
    let year = (new Date()).getFullYear();

    ReactDOM.render(
        <h1> Masz: {year- birthDate} lata</h1>,
        document.getElementById('app')
    )

});