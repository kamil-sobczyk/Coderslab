/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var btn = document.querySelector('.button');
    var ul = document.querySelector('.menu');
    var counter = 0;
    var liCounter = 1;
    
    btn.addEventListener('click',function () {
        var newLi = document.createElement('li');
        ul.appendChild(newLi);

        newLi.innerText = 'Element ' + liCounter + ' w chwili dodania było '+ counter + ' elementów ';

        liCounter++;
        counter++;
        });
    });


// document.addEventListener("DOMContentLoaded", function () {
//
//     var list = document.querySelector('ul.menu');
//     var button = document.querySelector('.button');
//
//     button.addEventListener('click', function() {
//
//         var newElement = document.createElement('li');
//         newElement.innerText = 'New Element: '+(list.children.length+1);
//
//         list.appendChild(newElement);
//
//     });
//
//
// });