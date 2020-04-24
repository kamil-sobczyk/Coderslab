import React from 'react';
import ReactDOM from 'react-dom';

const color = 'red';

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div style={{color: color}}>{color}</div>,
        document.getElementById('app')
    );
});