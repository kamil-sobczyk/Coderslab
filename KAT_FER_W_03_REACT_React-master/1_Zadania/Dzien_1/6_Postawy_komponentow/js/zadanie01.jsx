import React from 'react';
import ReactDOM from 'react-dom';

function LikeBox1() {
    return <div>
        <p>100 likes</p>
        <button>I like it!</button>
    </div>
}

class LikeBox2 extends React.Component {
    render(){
        return <div>
            <p>200 likes</p>
            <button>Lubię to</button>
        </div>
    }
}



document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <div>
        <LikeBox1/>
        <LikeBox2/>
        </div>,
        document.getElementById('app')
);



});