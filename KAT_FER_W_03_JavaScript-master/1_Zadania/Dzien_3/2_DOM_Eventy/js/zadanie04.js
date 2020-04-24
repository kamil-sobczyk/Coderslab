/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var buttons = document.querySelectorAll('button');
    var counter = 0;

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelector('.counter').innerText = counter++;
        })
    })
    });







 // var btns = document.querySelectorAll('button');
// var counter = document.querySelector('.counter');
//
// btns.forEach(function (element) {
//     element.addEventListener('click', function () {
//         var i = parseInt(counter.innerText);
//         i++;
//         counter.innerText = i.toString();
//     });
// });