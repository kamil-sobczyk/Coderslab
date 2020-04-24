// task1

var allSampleClass = document.querySelectorAll('.sample_class');

function getTagsOfElements(elements) {
    var tagArray = [];
    elements.forEach(function (element) {
        tagArray.push(element.tagName);
    });
    return tagArray;

}
console.log(getTagsOfElements(allSampleClass));

// task2

var classNames = document.getElementById('sample_id');

function getClassesOfElement (element) {
    return element.classList;

}
console.log(getClassesOfElement(classNames));

// task3

var list = document.querySelectorAll('.sample_class_2 li');

function getInnerTextsOfElements(elements) {
    var textArray =[];
    elements.forEach(function (element) {
        textArray.push(element.innerText);
    });
    return textArray;

}
console.log(getInnerTextsOfElements(list));

// task4

var links = document.querySelectorAll('a');

function getAddressesOfElements(elements) {
    var adressArray = [];
    elements.forEach(function (element) {
        adressArray.push(element.getAttribute('href'))
    });
    return adressArray;

}
console.log(getAddressesOfElements(links));

// task5

var childrens = Array.from(document.querySelector('.sample_class_3').children);

console.log(getTagsOfElements(childrens));
















