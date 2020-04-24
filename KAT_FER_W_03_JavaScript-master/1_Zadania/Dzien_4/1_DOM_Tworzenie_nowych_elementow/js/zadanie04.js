/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

var btn = document.getElementById('remove');
var lis = document.querySelectorAll('li');

btn.addEventListener('click', function () {
    lis.forEach(function (li) {
        li.parentElement.removeChild(li);
    })

})
});


// document.addEventListener("DOMContentLoaded", function () {
//
//     var remove = document.querySelector('#remove');
//     var list = document.querySelector('ul.list');
//
//     remove.addEventListener('click', function () {
//         while (list.firstChild) {
//             list.removeChild(list.firstChild);
//         }
//     });
//
// });