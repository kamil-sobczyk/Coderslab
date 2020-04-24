/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function () {

    var windowWidth = document.getElementById('windowWidth');
    var windowHeight = document.getElementById('windowHeight');

    window.addEventListener('resize', function (e) {
        windowWidth.innerText = this.innerWidth;
        windowHeight.innerText = this.innerHeight;
    })

});

