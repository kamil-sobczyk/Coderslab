import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let a = Number(prompt('Podaj A:'));
    let b = Number(prompt('Podaj B:'));

    let c = prompt('Podaj działanie: +,-, * lub /');

        let result;
        if (c==='+') {
            result = <h1>Wynik:{a + b}</h1>;
        } else if (c=== '-') {
            result = <h2>Wynik:{a - b}</h2>;
        } else if (c==='*') {
            result = <h3>Wynik:{a * b}</h3>;
        } else if (c==='/') {
            result = <h4>Wynik:{a / b}</h4>;
        } else {
            alert ('zły znak!');
        }

        ReactDOM.render(
            <div>{result}</div>,
            document.getElementById('app')
        );

});