import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    let age = Number(prompt('Podaj wiek'));

    // let howOld;
    //
    // if (age<18) {
    //     howOld = <div id='youth'>{age}</div>
    // }
    // else {
    //     howOld = <div id='old'>{age}</div>
    // }
    //
    // ReactDOM.render(
    //     <div>{howOld}</div>,
    //     document.getElementById('app')
    // )




    // if(age <18){
    //     ReactDOM.render(
    //         <div id='youth'>Your age: {age}</div>,
    //         document.getElementById('app')
    //     );
    // }else {
    //     ReactDOM.render(
    //         <div id='adult'>Your age: {age}</div>,
    //         document.getElementById('app')
    //     );
    // }



    ReactDOM.render(
         <div id={age<18 ? 'youth' : 'adult'}>{age}</div>,
         document.getElementById('app')

     )


});