import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00_02';

document.addEventListener('DOMContentLoaded', function(){

    let list = people.map(p=>
        <div className="person">
            <img src = {p.avatar}/>
            <div className="info">
                <h1>{p.title} {p.name} {p.surname}</h1>
                <p>{p.bio}</p>
            </div>
        </div>);

    ReactDOM.render(
        <div>{list}</div>,
        document.getElementById('app')
    );

});