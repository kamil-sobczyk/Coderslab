document.addEventListener('DOMContentLoaded', function () {
    // window.addEventListener("resize", function () {
    //     if (window.innerWidth < 500) {
    //         console.log('tutaj ekran jest mniejszy niż 500px');
    //     } else {
    //         console.log('tutaj ekran jest większy lub równy 500px');
    //     }
    // });

    var mobile = window.matchMedia("screen and (max-width: 500px)");
    mobile.addListener(function (mobile) {
        if (mobile.matches) {
            console.log('tutaj ekran jest mniejszy lub równy 500px');
        } else {
            console.log('tutaj ekran jest wiekszy niż 500px');
        }
    });
});
//
// wykomentować jedno albo drugie, pokazanie możliwości