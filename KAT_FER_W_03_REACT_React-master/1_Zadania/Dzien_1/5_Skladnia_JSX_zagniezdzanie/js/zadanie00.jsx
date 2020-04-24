import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function(){

    let list = people.map(p=><div>{p.name} {p.surname}</div>);


    ReactDOM.render(
        <div>{list}</div>,
        document.getElementById('app')
    );
});