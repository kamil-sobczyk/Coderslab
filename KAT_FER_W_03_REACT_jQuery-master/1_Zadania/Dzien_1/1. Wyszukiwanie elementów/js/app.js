$(function () {

    console.log('works!');

    //z wykładowcą


    function changeBg() {
        $('section').addClass('backgroundElement');
    }

    changeBg();


    $('.links').find('nav').addClass('hover-effect');

//task1

    $('.main li').addClass('borderClass');

    $('.main').find('li').addClass('borderClass');




//task2

 var lis = $('.main').find('li');

 lis.addClass('colorText');
 lis.addClass('backgroundElement');


    // $('.main').find('li').addClass("colorText backgroundElement");

//task3

// $('.menu').find('a').css('color', 'red');
// $('.menu').find('a').addClass('redLinks');
// $('.menu').find('a').first().addClass('bigFont');

$(".menu"). find("a").addClass("redLinks").first().addClass("bigFont");

//task4

    $('h1').addClass('creepyHeader');

    $('h1').parent().css('border', '2px solid green');

    $('h1').next().addClass('crazy');

//task5

    console.log('task5');

    console.log($('.menu').find('li').first());
    console.log($('.menu').find('li').eq(2));
    console.log($('.menu').find('li').last());

    $('.menu').find('li').first().addClass('menuLinks');
    $('.menu').find('li').eq(2).addClass('menuLinks');
    $('.menu').find('li').last().addClass('menuLinks');


//task6

$('.menu').find('li').eq(2).hide();

//task7

    console.log('task7');
    console.log($('section.form').find('input').val()); //bez uszczegółowienia znajduje pierwszy
    console.log($('section.form').find('input').first().val());
    console.log($('section.form').find('input').last().val());

//task8


 var hrefAttr = $('#codersLink').attr('href');
 console.log(hrefAttr);

    $('#codersLink').attr('href', 'http://google.pl');

// var link = $('#codersLink');
//     console.log(link.attr('href'));
//
//     link.attr('href','http://google.pl');


//task9

var backbone = $('.links').find('a').first().data('hover');
console.log(backbone);

var js = $('.links').find('a').eq(1).data('hover');
console.log(js);

var angular = $('.links a').eq(2).data('hover');
console.log(angular);

var ember = $('.links a:last-child').data('hover');
console.log(ember);

$('.links').find('a').first().data('hover','Backbone');
$('.links a').eq(1).data('hover', 'JavaScript');
$('.links').find('a').eq(2).data('hover', 'Angular');

var js2 = $('.links').find('a').eq(1).data('hover');
console.log(js2);

var bB2 = $('.links').find('a').first().data('hover');
console.log(bB2);

var ang2 = $('.links').find('a').eq(2).data('hover');
console.log(ang2);



});

