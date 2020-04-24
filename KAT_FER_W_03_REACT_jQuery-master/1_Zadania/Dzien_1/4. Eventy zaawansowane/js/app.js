$(function () {

    var newDiv = $('<div class="panel">');
    $('.people').after(newDiv);

    newDiv.on('click', function () {
        console.log('works');

        var newP = $('<p>text</p>');
        newDiv.append(newP)
    });

    // newP.on('click', function () {
    //     console.log('p works'); // nie będzie działać bo p zostało stworzone w funkcji
    // });


    $(newDiv).on('click', 'p', function () {
        console.log('kliknięto na paragraf')
    });

//task1 atrybut content editable




});