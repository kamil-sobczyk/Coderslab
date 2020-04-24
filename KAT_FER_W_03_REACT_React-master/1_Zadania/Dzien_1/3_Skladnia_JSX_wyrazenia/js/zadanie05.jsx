import React from 'react';
import ReactDOM from 'react-dom';
import animals from './zadanie05.js';

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div>Number of animals: {animals.length} List of animals: {animals.join(', ')}</div>,
        document.getElementById('app')
    );
});