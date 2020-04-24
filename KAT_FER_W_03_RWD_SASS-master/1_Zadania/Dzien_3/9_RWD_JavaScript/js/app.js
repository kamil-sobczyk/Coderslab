document.addEventListener('DOMContentLoaded', function () {
    
    var mobile = window.matchMedia("screen  and (max-width:400px");
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('#menu-trigger');
    
    btn.addEventListener('click', function () {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }

    });

    mobile.addListener(function (mobile) {
        if (mobile.matches) {
            /* tutaj ekran jest mniejszy lub równy 500px */
            menu.style.display = 'none';
            btn.style.display = 'block';
        } else {
            /* tutaj ekran jest większy niż 500px */
            menu.style.display = 'block';
            btn.style.display = 'none';
        }

    });

    

// ROZWIĄZANIE MARKA
    // var menu = document.querySelector('.menu');
    // var button = document.querySelector('#menu-trigger');
    // button.addEventListener('click', function() {
    //     var state = this.dataset.hit;
    //
    //     if (state === '1') {
    //         menu.style.display = 'none';
    //         this.dataset.hit = '0';
    //     } else {
    //         menu.style.display = 'block';
    //         this.dataset.hit = '1';
    //     }
    // });
    //
    // var mobile2 = window.matchMedia("screen and (min-width: 401px)");
    // mobile2.addListener(function (mobile2) {
    //     if (mobile2.matches) {
    //         menu.style.display = 'block';
    //         button.dataset.hit = '1';
    //     }
    // });
    //
    // var mobile = window.matchMedia("screen and (max-width: 400px)");
    // mobile.addListener(function (mobile) {
    //     if (mobile.matches) {
    //         menu.style.display = 'none';
    //         button.dataset.hit = '0';
    //     }
    // });

});