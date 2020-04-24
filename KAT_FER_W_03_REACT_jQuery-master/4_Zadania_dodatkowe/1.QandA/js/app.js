$(function () {

var quest = $('h1');
var answers = $('p');


quest.on('click', function () {

    answers.hide();
    $(this).next().show();

})


});