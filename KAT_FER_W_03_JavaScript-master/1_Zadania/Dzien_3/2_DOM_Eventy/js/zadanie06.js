/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function () {

var box = document.getElementById('box');

var globalX = document.getElementById('globalX');
var globalY = document.getElementById('globalY');
var localX = document.getElementById('localX');
var localY = document.getElementById('localY');

box.addEventListener('mousemove', function (event) {
    globalX.innerText = event.screenX;
    globalY.innerText = event.screenY;
    localX.innerText = event.clientX;
    localY.innerText = event.clientY;
})

});