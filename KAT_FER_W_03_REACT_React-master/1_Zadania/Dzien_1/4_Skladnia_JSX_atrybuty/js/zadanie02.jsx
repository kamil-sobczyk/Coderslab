import React from 'react';
import ReactDOM from 'react-dom';




//
// document.addEventListener('DOMContentLoaded', function(){
//     //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
//     function getNumber(){
//         return Math.round( Math.random() * 9 + 1 );
//     }
//     //Nie modyfikuj kodu powyżej
//
//     let a= getNumber();
//     let b= getNumber();
//
//     let result= Number(prompt(`What is sum of ${a} and ${b} ?`));
//
//     let answer;
//     if(result === (a + b)) {
//         answer = <div style={{backgroundColor: 'green'}}>ODPOWIEDŹ POPRAWNA</div>
//     }else {
//         answer = <div style={{backgroundColor: 'red'}}>ODPOWIEDŹ BŁĘDNA</div>
//     }
//
//
//     ReactDOM.render(
//         <div>{answer}</div>,
//         document.getElementById('app')
//     )





    // let a = getNumber();
    // let b = getNumber();
    //
    //
    // let result = Number(prompt(`What is sum of ${a} and ${b} ?`));
    //
    //
    // if (result === (a+b)) {
    //     ReactDOM.render(
    //         <div style={{backgroundColor: 'green'}}>Odpowiedź poprawna</div>,
    //         document.getElementById('app')
    //     );
    //
    // }
    // else {
    //     ReactDOM.render(
    //         <div style={{backgroundColor: 'red'}}>Odpowiedź błędna</div>,
    //         document.getElementById('app')
    //     );
    //
    // }


// });


//Zapisując w jednej zmiennej gotowy element w zależności od sytuacji;

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// document.addEventListener('DOMContentLoaded', function(){
//     //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
//     function getNumber(){
//         return Math.round( Math.random() * 9 + 1 );
//     }
//     //Nie modyfikuj kodu powyżej
//
//     let a = getNumber();
//     let b = getNumber();
//
//     let result = Number(prompt(`What is sum of ${a} and ${b} ?`));
//
//     let correct =  <div style={{backgroundColor: 'green'}}>Odpowiedź poprawna</div>;
//     let incorrect = <div style={{backgroundColor: 'red'}}>Odpowiedź błędna</div>;
//
//
//     if (result === (a+b)) {
//         ReactDOM.render(
//             correct,
//             document.getElementById('app')
//         );
//
//     }
//     else {
//         ReactDOM.render(
//             incorrect,
//             document.getElementById('app')
//         );
//
//     }
//
// });

//Zapisując w dwóch zmiennych tekst i kolor tła;



//Tworząc nową funkcję:

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// function getAnswerElement(a, b, answer) {
//     if( a + b === answer) {
//         return <div style={{backgroundColor: 'green'}}>Wynik poprawny</div>;
//     } else {
//         return <div style={{backgroundColor: 'red'}}>Wynik niepoprawny</div>;
//     }
// }
//
document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function getNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }

    let a = getNumber();
    let b = getNumber();

    let result = Number(prompt(`Podaj wynik dodawania ${a} i ${b}:`));
    //Nie modyfikuj kodu powyżej

function getAnswerElement(a,b,result) {
    if(result === (a +b)){
        return <div style={{backgroundColor: 'green'}}>Wynik poprawny</div>;
    }
    else {
        return <div style={{backgroundColor: 'red'}}>Wynik niepoprawny</div>;
    }

}

    ReactDOM.render(
        getAnswerElement(a, b, result),
        document.getElementById('app')
    );
});