const urlApi  = 'https://api.chucknorris.io/jokes/random';

$(() => {

    let img = $("img");

    let insertText = (chuck) => $(".jokeContent").text(chuck.value);
    let insertImg = (chuck) => $("img").attr("src", chuck.icon_url);

    let loadChuck = () => {
        $.ajax({
            url: urlApi

        }).done(function (response) {
            insertText(response);
            insertImg(response);

        }).fail(function (error) {
            console.log(error);
        })
    }

    loadChuck();


})

