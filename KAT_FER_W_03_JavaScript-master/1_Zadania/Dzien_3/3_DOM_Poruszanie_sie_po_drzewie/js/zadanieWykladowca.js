/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {

     var p1 = document.querySelector('.first').children[0].children[2];
    var p2 = document.querySelector('#second').parentElement.children[3];

    var p3 = document.querySelector('[data-ex=third]').parentElement.parentElement.lastElementChild.firstElementChild;
    var p3children = p3.children;
    var middleChild = p3children[Math.floor(p3children.length / 2)];

    var p4 = document.querySelector('.forth').parentElement.querySelector('article').querySelectorAll('p')[1];

});