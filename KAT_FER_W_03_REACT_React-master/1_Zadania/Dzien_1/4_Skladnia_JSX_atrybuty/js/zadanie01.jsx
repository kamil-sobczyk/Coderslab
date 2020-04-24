import React from 'react';
import ReactDOM from 'react-dom';

// document.addEventListener('DOMContentLoaded', function(){
//     //Nie modyfikuj kodu powyżej
//
//
//     let redColor = {
//         backgroundColor:'red',
//         height: '100px'
//     };
//     let greenColor = {
//         backgroundColor: 'green',
//         height: '100px'
//     };
//
//     let blueColor = {
//         backgroundColor: 'blue',
//         height: '100px'
//     };
//
//     const redDiv = <div style ={redColor}></div>;
//     const greenDiv = <div style = {greenColor}></div>;
//     const blueDiv = <div style = {blueColor}></div>;
//
//     //Nie modyfikuj kodu poniżej
//     ReactDOM.render(
//         <div>
//             {redDiv}{greenDiv}{blueDiv}
//         </div>,
//         document.getElementById('app')
//     );
// });

// inaczej:


document.addEventListener('DOMContentLoaded', function(){
    //Nie modyfikuj kodu powyżej

   const redDiv = <div style={{backgroundColor: 'red', height: '100px'}}></div>

   const greenDiv = <div style={{backgroundColor: 'green', height: '100px'}}></div>

    const blueDiv = <div style={{height: '100px', backgroundColor: 'blue'}}></div>;

    //Nie modyfikuj kodu poniżej
    ReactDOM.render(
        <div>
            {redDiv}{greenDiv}{blueDiv}
        </div>,
        document.getElementById('app')
    );
});