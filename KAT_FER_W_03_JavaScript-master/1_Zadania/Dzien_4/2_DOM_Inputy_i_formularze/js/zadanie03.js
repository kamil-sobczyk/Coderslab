/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

var form = document.querySelector('form');
var button = document.querySelector('button');

var errorMsg = document.createElement('div.error');
document.querySelector('.panel-body').appendChild(errorMsg);

button.addEventListener('click', function (e) {
    e.preventDefault();
    var error = [];

    if (form.elements[0].value === form.elements[2].value) {
        error.push('Drużyny muszą być różne');
    }
    if (form.elements[1].value < 0 ||
        form.elements[3].value < 0) {
        error.push('Liczba goli nie może być ujemna');
    }

    errorMsg.innerText = error.join("\n");

    if (error.length === 0) {

        var newRow = document.createElement('tr');
        newRow.innerHTML = '<td>' + form.elements[0].value + '</td><td>' + form.elements[2].value + '</td><td>' + form.elements[1].value + ' - ' + form.elements[3].value + '</td>';

        document.querySelector('table tbody').appendChild(newRow);
    }


})

});

// document.addEventListener("DOMContentLoaded", function () {
//
//     var table = document.querySelector('table tbody');
//
//     var form = document.querySelector('form');
//
//     var errorMessage = document.querySelector('.error-message');
//
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         var error = [];
//
//         if (form.elements[0].value === '' || form.elements[2].value === '') {
//             error.push('Uzupełnij drużyny');
//         } else if (form.elements[0].value === form.elements[2].value) {
//             error.push('Obie drużyny muszą być różne');
//         }
//
//         if (form.elements[1].value === '' || form.elements[3].value === '') {
//             error.push('Uzupełnij liczbę goli');
//         }
//
//         if (form.elements[1].value < 0 || form.elements[3].value < 0) {
//             error.push('Liczba goli powinna być nieujemna');
//         }
//
//         errorMessage.innerText = error.join("\n");
//
//         if (error.length === 0) {
//             var newElement = document.createElement('tr');
//             newElement.innerHTML = '<td>' + form.elements[0].value + '</td><td>' + form.elements[2].value + '</td><td>' + form.elements[1].value + ' - ' + form.elements[3].value + '</td>'
//             table.appendChild(newElement);
//         }
//
//     });
//
// });
