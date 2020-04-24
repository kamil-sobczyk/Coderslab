$(function () {

//z wykładowcą

    var newDiv = $('<div>', {class: 'panel'});
    // var newDiv = $("<div class='panel'>hello</div>");
    newDiv.text('hello');

    $('.people').after(newDiv);


//task1

var btn = $('.people').find('input').last();

btn.on('click', function () {

    var addUser = $('#addUser').val();
    var age = $('#age').val();

    var newEl = $('<li>');
    newEl.attr('data-age', age);
    newEl.text(addUser);
    $('.main').append(newEl);
    f(age,newEl);

    $('#addUser').val('Wpisz imię i nazwisko');
    $('#age').val('Wpisz wiek');

});

    function f(checkAge, element) {
            if (checkAge<=15) {
                $(element).css('color', 'green');
            }
            else if (checkAge >= 41 ){
                $(element).css('color', 'brown');
            }
            else {
                $(element).css('color', 'blue')
            }
        }

//task2

function newSpans() {

        var span1 = $('<span>1. Jestem tutaj after</span>');
        var span2 = $('<span>2. Jestem tutaj before</span>');
        var span3 = $('<span>3. Jestem tutaj prepend</span>');
        var span4 = $('<span>4. Jestem tutaj append</span>');

        $('.where-i-am').after(span1);
        $('.where-i-am').before(span2);
        $('.where-i-am').prepend(span3);
        $('.where-i-am').append(span4);
}
newSpans();


//task3

// var divs = $('.block');
//
// divs.on('click', function () {
//     $(this).clone().appendTo('.right');
//     $(this).remove();
// })

    function switchBlock() {
        let blocks = $('.block');
        let leftColumn = $('.left');
        let rightColumn = $('.right');
        blocks.click(function() {
            if($(this).parent().attr('class') == 'left') {
                $(this).appendTo(rightColumn);
            } else {
                $(this).appendTo(leftColumn);
            }
        })
    }

    switchBlock();


});

