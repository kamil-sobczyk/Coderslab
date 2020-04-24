$('#addMovie').on("click", function () {

    $.ajax(

        url: 'http://localhost:3000/frutis/1',
        method:'delete',
        dataType: 'json';

    ).done(function(response){

        console.log(response)

    }).fail(function (message) {

        console.log(message)

    });


});



// w konsoli:
// json-server --watch nazwa pliku (data.json)