/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

var fvSection = document.querySelector('#invoiceData');
var checkBox = document.querySelector('#invoice');

fvSection.style.display = 'none';

checkBox.addEventListener('click', function () {
    if (checkBox.checked) {
        fvSection.style.display = 'block';
    }
    else (fvSection.style.display = 'none');

})

});
//
// document.addEventListener("DOMContentLoaded", function () {
//
//     var invoiceData = document.querySelector('#invoiceData');
//     var checkbox = document.querySelector('#invoice');
//
//     checkbox.addEventListener('click', function () {
//         invoiceData.classList.toggle('hidden');
//     });
//
// });
//
// css:
// class:hidden
// visibility: hidden