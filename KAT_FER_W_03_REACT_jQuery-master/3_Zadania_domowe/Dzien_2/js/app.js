$(function () {

    var pokeUrl= 'https://www.pokeapi.co/api/v2/pokemon/15/';
    var evolutionUrl = 'https://pokeapi.co/api/v2/evolution-chain/2/';

    function insertContent(pokemon) {

        // console.log(pokemon.stats[5].base_stat);

        $('h1').append(pokemon.name);
        $('li').first().append($('<span>' + pokemon.stats[5].base_stat + '</span>'));
        $('li').eq(1).append($('<span>').text(pokemon.stats[4].base_stat));
        $('li').last().append($('<span>').text(pokemon.stats[3].base_stat));
    }

    function loadData() {
        $.ajax({
            url: pokeUrl

        }).done(function(response){
            insertContent(response);
        }).fail(function(error) {
            console.log(error);
        })
    }

    loadData();

    function loadEvolution()  {
        $.ajax({
            methog:'GET',
            url: evolutionUrl,
            dataType:'json'
        }).done(function (response) {

            var charmander = $('<span>').text(response.chain.species.name + '=>');
            $('p.evolution-chain').append(charmander);

            var charmeleon = $('<span>').text(response.chain.evolves_to[0].species.name + '=>');
            $('p.evolution-chain').append(charmeleon);

            var charizard = $('<span>').text(response.chain.evolves_to[0].evolves_to[0].species.name);
            $('p.evolution-chain').append(charizard);

        }).fail(function (error) {
            console.log(error)
        })

    }

    loadEvolution();



});





