/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    console.log('===Przeszukiwanie, atrybut data===');

    var evenLi = document.querySelectorAll('.ex5 li:nth-child(even)');

    evenLi.forEach(function (element) {
        element.style.backgroundColor = 'green';
    });

    document.querySelector('.ex5 li:nth-child(5)').classList.add('big');

    var li3 = document.querySelectorAll('.ex5 li:nth-child(3n+0)');

    li3.forEach(function (element) {
        element.style.textDecoration = 'line-through';
    });

    console.log('===task1===');

    document.querySelector('.chrome').style.width = '100px';
    document.querySelector('.edge').style.backgroundImage = 'url(assets/img/edge.png)';
    document.querySelector('.firefox').style.backgroundImage = 'url(assets/img/firefox.png)';

    document.querySelector('.chrome + a').innerHTML = 'Chrome';
    document.querySelector('.firefox + a').innerHTML = "Firefox";


    document.querySelector('.firefox + a').setAttribute('href', 'https://www.mozilla.org/pl/');
    document.querySelector ('.edge + a').setAttribute('href', 'https://www.microsoft.com/pl-pl/windows/microsoft-edge');
    document.querySelector('.chrome + a').setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');

    /* ZAD 1 */

    // // var as = document.querySelectorAll('.ex1 a');
    // // as[0].innerHTML = 'Chrome';
    // // as[1].setAttribute('href', 'https://www.microsoft.com/pl-pl/windows/microsoft-edge');
    // // as[2].innerHTML = 'Firefox';
    // // as[2].setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');
    // //
    // // document.querySelector('.ex1 a:nth-of-type(1)');
    //
    // /* ZAD 2 */

    var name = document.getElementById('name');
    name.innerHTML = "Magda";

    var color = document.getElementById('fav_color');
    color.innerHTML = "green";

    var meal = document.getElementById('fav_meal');
    meal.innerHTML = "asparagus";


    // document.querySelector('#name').innerHTML = 'Marek';
    // document.querySelector('#fav_color').innerHTML = 'szary';
    // document.querySelector('#fav_meal').innerHTML = 'indian curry';


    /* ZAD 3 */

    document.querySelector('.ex3 ul').classList.add('menu');

    var lis = document.querySelectorAll('.ex3 li');
    lis.forEach(function(li) {
        li.classList.add('menuElement');
    });

    var errors = document.querySelectorAll('.ex3 .error');
    errors.forEach(function(li) {
        li.classList.remove('error');
    });

    /* ZAD 4 */

    var lis = document.querySelectorAll('.ex4 li');
    lis.forEach(function(li, index) {
        li.setAttribute('data-id', ++index);
    });

});




