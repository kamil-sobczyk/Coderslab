import React from 'react';
import ReactDOM from 'react-dom';

import person from './zadanie06';


document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div>
            <p style={{fontWeight: 'bold', fontSize: '30px', textAlign: 'center'}}>{person.name} {person.surname}</p>
            <p style={{fontWeight: 'bold', fontSize: '20px', textAlign: 'center'}}>{person.jobTitle}</p>
            <hr style={{width: '15%'}}></hr>
            <p style={{textAlign: 'center'}}>tel: {person.telNumber}</p>
        </div>,
        document.getElementById('app')
    );
});