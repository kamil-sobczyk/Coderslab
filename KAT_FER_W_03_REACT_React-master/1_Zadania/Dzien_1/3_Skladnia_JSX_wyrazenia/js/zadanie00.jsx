import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let a= Number(prompt('Podaj A:'));
    let b= Number(prompt('Podaj B:'));

    alert('To jest alert');
    confirm('czy chcesz zamknąć okno?');

    ReactDOM.render(
        <div>Wynik: {a+b}</div>,
        document.getElementById('app')
    );







    alert('To jest alert');
    confirm('czy chcesz zamknąć okno?');

});