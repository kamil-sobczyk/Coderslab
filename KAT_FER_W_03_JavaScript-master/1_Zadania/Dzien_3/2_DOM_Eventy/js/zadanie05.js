/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function () {

    var divs = document.querySelectorAll('.box');
    
    divs.forEach(function (div) { 
        div.addEventListener('click',function () {
            this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        })
    })


});