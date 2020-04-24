/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

    var pctrs = document.querySelectorAll('img');

    var picsArray = [];
    pctrs.forEach(function (pic) {
        picsArray.push(pic)
    });

    var btnHide = document.querySelector('#hideButton');
    var btnShow = document.querySelector('#showButton');

    var inpt = document.querySelector('input');

    btnHide.addEventListener('click', function () {
        var text = inpt.value;
        inpt.value = '';

        picsArray.forEach (function (img) {
            if (img.dataset.tag.indexOf(text) > -1)
            // console.log(img.dataset.tag)
                img.classList.add('invisible');
        });

    });

    btnShow.addEventListener('click', function () {
        var text = inpt.value;
        inpt.value = '';

        picsArray.forEach (function (img) {
            if (img.dataset.tag.indexOf(text) > -1)
            // console.log(img.dataset.tag)
                img.classList.remove('invisible');
        });


        });

});