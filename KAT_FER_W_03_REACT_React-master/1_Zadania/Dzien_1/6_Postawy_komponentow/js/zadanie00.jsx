import React from 'react';
import ReactDOM from 'react-dom';

function SearchBox1() {
    return (
        <div>
            <input type="text" />
            <button>Wyszukaj</button>
        </div>);
}

class SearchBox2 extends React.Component
{
    render() {
        return (
            <div>
                <input type="text" />
                <button>Wyszukaj</button>
            </div>);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
            <SearchBox1 />
            <SearchBox2 />
        </div>,
        document.getElementById('app')
    );
});