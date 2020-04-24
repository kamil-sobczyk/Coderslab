import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    function LikeBox1(props) {
        return (
            <div>
                <p>{ props.likes } likes</p>
                <button>I Like it!</button>
            </div>
        );
    }

    class LikeBox2 extends React.Component {
        render() {
            return (
                <div>
                    <p>{ this.props.likes } likes</p>
                    <button>Lubię to!</button>
                </div>
            );
        }
    }



    ReactDOM.render(
        <div>
            <LikeBox1 likes="15" />
            <LikeBox2 likes="100" />
        </div>,
        document.getElementById('app')
    );
});