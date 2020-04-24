/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', function () {

    var pics = document.querySelectorAll('li');
    var liArray =[];
    pics.forEach(function (li) {
        liArray.push(li)
    });

    var body = document.querySelector('body');

    pics.forEach(function (pic) {
        pic.addEventListener('click', function () {
            var src = (this.querySelector('img').getAttribute('src'));

            var newElement = document.createElement('div');
            newElement.classList.add('fullScreen');
            newElement.innerHTML = '<img src="'+src+'"><button class="close">Close</button>';

            document.body.appendChild(newElement);
            
            document.querySelector('.close').addEventListener('click', function () {
                newElement.parentElement.removeChild(newElement);
            })

        })
    });


});

