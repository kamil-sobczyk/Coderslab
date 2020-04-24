document.addEventListener("DOMContentLoaded", function () {

var btns = document.querySelectorAll('button');
var div = document.querySelector('#container');

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        div.innerText = btn.dataset.text;
    })
});


});