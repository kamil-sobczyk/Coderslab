// document.addEventListener('DOMContentLoaded', function () {
//
//    var links = document.querySelectorAll('a');
//
//    var firstA = links[0];
//
//    var secondA = links[1];
//
//    firstA.addEventListener('click', function () {
//        this.nextElementSibling.classList.remove("content")
//    });
//
//    secondA.addEventListener('mouseover', function () {
//        this.nextElementSibling.classList.remove("content")
//    });
//
// });

document.addEventListener('DOMContentLoaded', function () {

    var links = document.querySelectorAll('a');

    var firstA = links[0];

    var secondA = links[1];

    firstA.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle("content");
    });

    secondA.addEventListener('mouseover', function () {
        this.nextElementSibling.classList.toggle("content")
    });

});

// document.addEventListener("DOMContentLoaded", function(){
//     var link1 = document.querySelectorAll("a")[0];
//     var link2 = document.querySelectorAll("a")[1];
//
//     link1.addEventListener('click',function(){
//         this.nextElementSibling.style.display="block";
//     });
//
//     link2.addEventListener('click',function(){
//         this.nextElementSibling.style.display="block";
//     })
// });