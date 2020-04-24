$(function () {

//task1

    $('.border').css('border', '2px solid green');

//task2

   var menu = $('#menu');

   var menuChildren = $('#menu').children();

   menuChildren.last().text('jestem ostatnim dzieckiem');

//task3

    menuChildren.each(function () {

        $(this).css('color', $(this).data('color'));

    });

//task4

var btn = $('.login').find('button');

btn.on('click', function () {
    console.log('dzialam');
    if ($(this).next().attr('type') == 'password') {
        $(this).next().attr('type', 'text');
    }
    else {
        $(this).next().attr('type', 'password');
    }
    // console.log($(this).next().attr('type'));
})


});