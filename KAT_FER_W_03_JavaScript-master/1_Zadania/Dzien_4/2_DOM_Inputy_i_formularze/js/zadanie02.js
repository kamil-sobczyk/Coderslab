/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var btn = document.querySelector('button');
    var select = document.querySelector('.form-control');
    var imgs = document.querySelectorAll('img');


    btn.addEventListener('click', function (e) {

        e.preventDefault();

        if (select.children[0].selected === true) {
            imgs[0].style.display = 'none';
            imgs[1].style.display = 'none';
            imgs[2].style.display = 'block';
        }
        if (select.children[1].selected === true) {
            imgs[0].style.display = 'block';
            imgs[1].style.display = 'none';
            imgs[2].style.display = 'none';
        }
        if (select.children[2].selected === true) {
            imgs[0].style.display = 'none';
            imgs[1].style.display = 'block';
            imgs[2].style.display = 'none';
        }

    })
});


// document.addEventListener('DOMContentLoaded', function (e) {
//
//     var select = document.querySelector('select');
//
//     var apple = document.querySelectorAll('img')[0];
//     var ubuntu = document.querySelectorAll('img')[1];
//     var windows = document.querySelectorAll('img')[2];
//
//
//     apple.style.display = 'none';
//     ubuntu.style.display = 'none';
//
//
//
//     select.addEventListener('change', function () {
//         if (select.value === 'Windows') {
//             apple.style.display = 'none';
//             ubuntu.style.display = 'none';
//             windows.style.display = 'block'
//         }
//         if (select.value === 'Os X') {
//             apple.style.display = 'block';
//             windows.style.display = 'none';
//             ubuntu.style.display = 'none';
//         }
//         if (select.value === 'Ubuntu') {
//             ubuntu.style.display = 'block';
//             apple.style.display = 'none';
//             windows.style.display = 'none';
//         }
//
//     })
//
// });