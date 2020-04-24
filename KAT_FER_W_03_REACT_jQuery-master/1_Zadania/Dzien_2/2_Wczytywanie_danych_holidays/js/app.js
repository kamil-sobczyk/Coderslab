$(function() {

    // // variables for DOM
    // var ul = $("#holiday-dates");
    //
    //
    // //Tutaj wpisz cały adres z kluczem, będzie on wyglądał mniej więcej tak:
    //
    // var holidayUrl = 'https://holidayapi.com/v1/holidays?key=bcd90b88-c836-46d9-87bb-edc51dc87936&country=US&year=2017&month=05';
    //
    // function insertHolidays(days) {
    //     //Użyj sposobu na pobranie wartości z obiektu (nie kluczy) np. pętla for in
    //         for (var i=0; i<days.length; i++) {  //gdy pętla po obiekcie to for in albo each
    //             var li = $('<li>').text(days[i].name);
    //             var span = $('<span>').text(days[i].date);
    //             li.append(span);
    //             ul.append(li);
    //         }
    //     }
    //
    //     function loadDays() {
    //         $.ajax({
    //             url: holidayUrl
    //         }).done(function (response) {
    //             console.log(response.holidays);
    //             insertHolidays(response.holidays);
    //         }).fail(function (error) {
    //             console.log(error);
    //         })
    //     }
    //
    //     loadDays();
    //
    //wyżej dane w api były w tablicy, tutaj są obiektem - SPOSÓB Z EACH:

    var ul = $('#holiday-dates');

    var holidayUrl = 'https://holidayapi.com/v1/holidays?key=21f6af33-63a6-4f3e-9c29-296670ab799e&country=PL&year=2016';

    function loadDays() {
        $.ajax({
            url:holidayUrl

        }).done(function (response) {
            console.log(response.holidays);
            $.each(response.holidays, function (key,value) {
                var li = $('<li>').text(value[0].name);
                var span = $('<span>').text(key);
                li.append(span);
                ul.append(li);

            })


        }).fail(function (error) {
            console.log(error)
        })
    }

    loadDays();

    //SPOSÓB Z FOR ...IN
    //
    // var ul = $('#holiday-dates');
    //
    // var holidayUrl = 'https://holidayapi.com/v1/holidays?key=21f6af33-63a6-4f3e-9c29-296670ab799e&country=PL&year=2016';
    //
    //
    // function loadDays(days) {
    //     $.ajax({
    //         url: holidayUrl,
    //         dataType: 'json'
    //
    //     }).done(function(response){
    //         console.log(response);
    //         for (x in response.holidays) {
    //             console.log(response.holidays[x]);
    //             response.holidays[x].forEach(function(el){
    //                 var li = $('<li>').text(el.name);
    //                 var span = $('<span>').text(el.date);
    //                 li.append(span);
    //                 ul.append(li);
    //             })
    //         }
    //
    //     }).fail(function(error) {
    //         console.log(error);
    //     })
    // }
    // loadDays();






    });



