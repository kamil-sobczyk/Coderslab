import React from 'react';
import ReactDOM from 'react-dom';

const size = '500px';

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div style={{width: size, height: size, backgroundColor: 'blue'}}></div>,
        document.getElementById('app')
    );

});