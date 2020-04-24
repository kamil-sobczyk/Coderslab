/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

    var nextBtn = document.querySelector('#nextPicture');
    var prevBtn = document.querySelector('#prevPicture');

    var list = document.querySelectorAll('li');
    var liArray =[];
    list.forEach(function (li) {
        liArray.push(li);
    });

    var imgIndex = 0;

    var visible = liArray[imgIndex].classList.add('visible');

    nextBtn.addEventListener('click', function () {

        visible = liArray[imgIndex].classList.remove('visible');
        imgIndex++;
        if (imgIndex >=liArray.length) {
            imgIndex = 0}
        visible = liArray[imgIndex].classList.add('visible');



    });

    prevBtn.addEventListener('click', function () {

        visible = liArray[imgIndex].classList.remove('visible');
        imgIndex--;
        if (imgIndex < 0) {
            imgIndex = liArray.length-1}
        visible = liArray[imgIndex].classList.add('visible');

    })

});