/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {

    var buttons = document.querySelectorAll('.deleteBtn');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(){
            this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
        });
    });

});