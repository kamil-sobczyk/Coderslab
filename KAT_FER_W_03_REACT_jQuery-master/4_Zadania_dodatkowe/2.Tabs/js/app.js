$(function () {

var listElement = $('li');
var divs = $('div').find('div');

console.log(listElement);
console.log(divs);



listElement.each(function (index) {
   $(this).attr('data-id', index);
});


listElement.on('click', function () {
    divs.hide();
    divs.eq($(this).data('id')).show();


})

});