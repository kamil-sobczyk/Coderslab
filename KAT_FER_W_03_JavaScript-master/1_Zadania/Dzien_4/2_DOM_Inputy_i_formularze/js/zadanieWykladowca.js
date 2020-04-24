/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {

    var form = document.querySelector('form');
    var button = document.querySelector('button');

    var errorMessage = document.querySelector('.error-message');

    button.addEventListener('click', function(e) {
        e.preventDefault();
        var error = [];

        if (form.elements[0].value.indexOf('@') === -1) {
            error.push('Email musi posiadać znak @');
        }

        if (form.elements[1].value.length < 6) {
            error.push('Twoje imię jest za krótkie');
        }

        if (form.elements[2].value.length < 6) {
            error.push('Twoje nazwisko jest za krótkie');
        }

        if (form.elements[3].value.length === 0 ||
            form.elements[4].value.length === 0) {
            error.push('Hasła nie są takie same lub puste');
        } else {
            if (form.elements[3].value !== form.elements[4].value) {
                error.push('Hasła nie są takie same lub puste');
            }
        }

        if (!form.elements[5].checked) {
            error.push('Musisz zaakceptować warunki');
        }

        errorMessage.innerText = error.join("\n");

        if (error.length === 0) {
            form.submit();
        }

    });

});