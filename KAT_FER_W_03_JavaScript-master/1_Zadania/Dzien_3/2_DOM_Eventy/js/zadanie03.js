/**
 * Created by Jacek on 2016-01-12.
 *
 *
 */


document.addEventListener('DOMContentLoaded', function () {

    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;

    var btn1 = document.querySelector('#button1');
    btn1.addEventListener('click', function () {
        document.querySelector('p:nth-of-type(1) .counter').innerText = counter1++;
    });

    var btn2 = document.querySelector('#button2');
    btn2.addEventListener('click', function () {
        document.querySelector('p:nth-of-type(2) .counter').innerText = counter2++;
    });

    var btn3 = document.querySelector('#button3');
        btn3.addEventListener('click', function () {
            document.querySelector('p:nth-of-type(3) .counter').innerText = counter3++;
        });


    });

// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('#button1').addEventListener('click', function() {
//         var counter = document.querySelector('p:nth-of-type(1) .counter');
//         document.addEventListener('click', incrementCounter(counter));
//     });
//
//     document.querySelector('#button2').addEventListener('click', function() {
//         var counter = document.querySelector('p:nth-of-type(2) .counter');
//         document.addEventListener('click', incrementCounter(counter));
//     });
//
//     document.querySelector('#button3').addEventListener('click', function() {
//         var counter = document.querySelector('p:nth-of-type(3) .counter');
//         document.addEventListener('click', incrementCounter(counter));
//     });
//
//     function incrementCounter(counter) {
//         counter.innerText++;
//     }
// });
