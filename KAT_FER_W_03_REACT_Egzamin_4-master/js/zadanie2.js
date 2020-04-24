$( () => {



    let getRandomText = () => {
            let korpoText = ['risercz', 'dedlajn', 'dżołk', 'łikend', 'Dizajn', 'fakap' ];
            let randomNumber = Math.floor(Math.random() * korpoText.length);
            return korpoText[randomNumber];
    }




    let div = $('.box');

    let par = $('.box').find('p');




    div.on('mouseenter', (e) => {
        console.log($(e.target).children());
        $(e.target).children().show();
        $(e.target).children().text(getRandomText());
    });

    div.on('mouseleave', (e) => {
        $(e.target).children().hide();
    })



});





