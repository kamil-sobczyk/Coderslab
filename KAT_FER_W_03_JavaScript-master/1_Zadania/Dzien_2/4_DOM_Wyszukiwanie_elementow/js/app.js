/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
     var el = document.querySelector('.title');

        function getDataAnimation(element) {
            return element.dataset.animation;
        }

        console.log(getDataAnimation(el));


    console.log('===task1===');



     var idHome = document.getElementById('home');
 idHome = document.querySelector('#home');
 console.log(idHome);

 var li = document.querySelector('li[data-direction]');
 console.log(li);

 var blockClass = document.querySelector('.block');
     blockClass = document.getElementsByClassName('block');
 console.log(blockClass);


 console.log('===task2===');

 var liNav = document.querySelectorAll('nav li');
 console.log(liNav);

 var paragraphsInDivs = document.querySelectorAll('div p');
 console.log(paragraphsInDivs);

 var divsInArticle = document.querySelectorAll('article div');
 console.log(divsInArticle);


 console.log('===task3===');

 var firstArticle = document.querySelector('article.first');

 var h2s = firstArticle.querySelectorAll('h2');
 console.log(h2s);
 console.log(h2s.length);

    });
