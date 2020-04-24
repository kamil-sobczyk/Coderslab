//odpięcie elementów 'off'
$(function () {

    //z wykładowcą

$('dt').on('mouseenter', function () {
   console.log($(this).text());
});


$('.hero-buttons').find('button').on('click', function () {
   console.log($(this).data('feature'));
});

    // $('.hero-buttons button').on('click', function() {
    //     console.log($(this).data('feature')); //drugi sposób:z find
    // });


//task1

// $('dd').addClass('hide');
//
// $('dt').on('click', function () {
//     $(this).next().toggleClass('hide');
//
// });

    function switchH() {
        $('dd').hide();

        $('dt').on("click", function () {
            $(this).next().toggle();
        });
    }
    switchH();


//task2

function f() {
  $('.shopping').find('button').on('click', function () {
      if($(this).text()==='Dodaj') {
      $(this).addClass('added');
      $(this).prev().css('border', '2px solid green');
      $(this).text('Dodano');
      }
      else {
          $(this).removeClass('added');
          $(this).prev().css('border', '');
          $(this).text('Dodaj');
      }
  })



};

f();



});