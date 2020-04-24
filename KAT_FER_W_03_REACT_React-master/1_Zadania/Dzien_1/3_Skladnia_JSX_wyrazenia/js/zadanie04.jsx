import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let a = Number(prompt('Podaj A:'));
    let b = Number(prompt('Podaj B:'));
    let operation = prompt('Podaj działanie: +,-, * lub /');

    function calc (a,b, operation) {
        if (operation==='+') {
            return <h1>Wynik {a+b}</h1>
        }
        else if (operation === '-') {
            return <h2>Wynik {a-b}</h2>
        }
        else if (operation === '*') {
            return <h3>Wynik {a*b}</h3>
        }
        else if (operation === '/') {
            return <h4>Wynik: {a/b}</h4>
        }
        else alert('zły znak!')
    }

    // let calc = (a, b, operation) =>{
    //     if(sign === '+'){
    //         return <h1>Sum of A and B is: {a + b}</h1>;
    //     } else if(sign === '-'){
    //         return <h2>Difference of A and B is: {a - b}</h2>;
    //     }else if(sign === '*'){
    //         return <h3>Multiplication of A and B is: {a * b}</h3>;
    //     }else if (sign === '/'){
    //         return <h4>Division of A and B is: {a / b}</h4>;
    //     }
    // }



    ReactDOM.render(
        <div>Result: {calc(a,b, operation)}</div>,
        document.getElementById('app')
    );
});