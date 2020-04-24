/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

var buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    button.addEventListener('click', function () {
        this.parentElement.style.backgroundColor = randomColor;
    })
})

});

