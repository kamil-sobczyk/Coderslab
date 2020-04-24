$(function () {

    var span = $('div').find('span');
    var ul = $('div').find('ul');

    ul.hide();

    // span.on('mouseover', function () {            pełna wersja
    //     $(this).next().css('display', 'block');
    // });

    // span.on('mouseover',(e) => {
    //     e.target.nextElementSibling.style.display = 'block';
    // });

    //albo

    Array.from(span).forEach((span) => {
        span.addEventListener("mouseover", (e) => {
            e.target.nextElementSibling.style.display = "block";
        });
    });


});


