$(function(){




const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
};


App.prototype.generateLinks = function() {
  this.websites.map((el)=>{
    this.links.push('https://' + el + '.com');
  })

};


let app = new App();
app.generateLinks();
console.log(app.links);



$('.menu').find('a').first().attr('href',app.links[0]);
$('.menu').find('a').eq(1).attr('href', app.links[1]);
$('.menu').find('a').last().attr('href', app.links[2]);





// var as = $('.menu').find('a');
//
// as.each(function (i){
//    // console.log(as[i].setAttribute('href', app.links[i]));
//    //  console.log($(this).attr('href', app.links[i]));
// });


});



