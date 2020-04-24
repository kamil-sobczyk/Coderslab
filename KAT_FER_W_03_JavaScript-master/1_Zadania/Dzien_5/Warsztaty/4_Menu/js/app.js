/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function () {

    var mainMenu = document.querySelectorAll('.nav>ul>li');

    mainMenu.forEach(function (li) {

        li.addEventListener('mouseover', function () {

            var subMenu = this.querySelector('ul');
            if (subMenu !== null) {
                subMenu.style.display = 'block';
            }
        });

        li.addEventListener('mouseout', function () {

            var subMenu = this.querySelector('ul');
            if (subMenu !== null) {
                subMenu.style.display = 'none';
            }
        });
    })

});