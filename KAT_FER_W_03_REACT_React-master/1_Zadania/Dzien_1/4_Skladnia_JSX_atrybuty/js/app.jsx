import React from 'react';
import ReactDOM from 'react-dom';

//task1 Atrybut ze zmiennej

document.addEventListener('DOMContentLoaded', function(){

    const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';



    ReactDOM.render(
        <img src={imageUrl}/>,
        document.getElementById('app')
    );
});

//task 2 Dynamiczne style



document.addEventListener('DOMContentLoaded', function(){

    const color = prompt('Podaj kolor ramki:');

    let element;
    if (['red','green','blue'].indexOf(color) === -1) {
        element = <div>Nieprawidłowy kolor</div>;
    } else {
        const style = {
            width: '100px',
            height: '100px',
            borderWidth: '5px',
            borderStyle: 'solid',
            borderColor: color
        };
        element = <div style={style}></div>;
    }

    ReactDOM.render(
        element,
        document.getElementById('app')
    );
});