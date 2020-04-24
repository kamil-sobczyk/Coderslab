/**
 * Created by Jacek on 2016-01-12.
//  */
 document.addEventListener('DOMContentLoaded', function () {


 // var buttons = document.querySelectorAll('.button');
 //
 // buttons.forEach(function (button) {
 //     button.addEventListener('click', function () {
 //           var sibling = this.nextElementSibling;
 //         if (sibling !== null) {
 //             if (sibling.style.display == "none") {
 //                 sibling.style.display = "block";
 //             }
 //             else {sibling.style.display = "none";}
 //             }
 //         })
 //     })
 // });

var buttons = document.querySelectorAll('.button');

 buttons.forEach(function (button) {
     button.addEventListener('click', function (e) {
         console.log('Click: ', e.target.id);
         if (this.nextElementSibling !== null) {
             this.nextElementSibling.classList.toggle('hidden');
         }
     });
 });
 });


//     var buttons = document.querySelectorAll('.button');
//
//     buttons.forEach(function (button) {
//         button.addEventListener('click', function () {
//
//             var sibling = this.nextElementSibling;
//             if (sibling.style.display == "none") {
//                 sibling.style.display = "block";
//             } else {
//                 sibling.style.display = "none";
//             }
//         })
//     });
// });