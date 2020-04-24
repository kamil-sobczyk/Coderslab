document.addEventListener('DOMContentLoaded', function () {

var btns = document.querySelectorAll('button');

var btn1 = document.querySelector('#button-1');
var btn2 = document.querySelector('#button-2');
var btn3 = document.querySelector('#button-3');

var list = document.querySelector('ul');

btn1.addEventListener('click', function (e) {
    var newLi = document.createElement('li');
    newLi.innerText = 'chleb';
    list.appendChild(newLi);
});
    
btn2.addEventListener('click', function () {
    list.lastElementChild.parentElement.removeChild(list.lastElementChild);
});

btn3.addEventListener('click', function () {
    var newProduct = list.children[1].cloneNode(true);
    list.appendChild(newProduct);
})
    
    
});