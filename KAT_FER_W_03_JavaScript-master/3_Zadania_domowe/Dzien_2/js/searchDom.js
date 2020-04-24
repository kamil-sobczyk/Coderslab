
var idMenu = document.getElementById('menu');
function getDataInfo(element) {
    var element = element.children;
    var array= [];
    for (var i=0; i<element.length; i++){
    array.push(element[i].dataset.info);}
    return array;
}
console.log(getDataInfo(idMenu));

var idMainContener = document.getElementById('main-contener');
function getElementClass(element) {
    return element.classList;
}
console.log(getElementClass(idMainContener));

var pinkClass = document.querySelector('.pink-color');
function getElementText (element) {
return element.innerText;
}
console.log(getElementText(pinkClass));

var img = document.querySelectorAll('.images');
function getElementAlt (element) {
    var imgArray = [];
    for (var i=0; i<element.length; i++) {
        imgArray.push(element[i].getAttribute('alt'));
    }
    return imgArray;
}
console.log(getElementAlt(img));

var myLink = document.querySelectorAll('.my-link');
function getElementHref(element) {
    var hrefArray =[];
    for (var i=0; i<element.length; i++) {
        hrefArray.push(element[i].getAttribute('href'));
    }
    return hrefArray;
}
console.log(getElementHref(myLink));