/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    console.log('===atrybut data===');

     function getDatasInfo(elements) {

        var tablica = [];
        for (var i = 0; i < elements.length; i++) {
            tablica.push(elements[i].dataset);
        }
        return tablica;
    }

    var result = getDatasInfo(links);
    console.log(result);


    console.log('===task1===');

console.log(homeElement);

console.log(childElements);
    for (var i=0; i<childElements.length; i++) {
     var tag = childElements[i].tagName;
     var klasa = childElements[i].className;
        console.log(tag);
        console.log(klasa);
    }


console.log(banner);

console.log(blocks);
for (var i=0; i<blocks.length; i++) {
    var tagBlocks = blocks[i].tagName;
    var klasaBlocks = blocks[i].className;
    console.log(tagBlocks);
    console.log(klasaBlocks);
}

console.log(links);
for (var i=0; i<links.length; i++) {
    var tagLinks = links[i].tagName;
    var klasaLinks = links[i].className;
    console.log(tagLinks);
    console.log(klasaLinks);
}

    console.log('===task2===');

for (var i=0; i<blocks.length; i++) {
    var innerHTML = blocks[i].innerHTML;
    var outerHTML = blocks[i].outerHTML;
    console.log(innerHTML);
    console.log(outerHTML);
    //inner - zawartość, outer - zawartość z tagiem
    innerHTML = "Nowa wartość diva o klasie blocks";
    console.log(innerHTML);
}

console.log('===task3===');

var mainFooter = document.getElementById('mainFooter');

function getId(element){
    console.log(element.id);
}
getId(mainFooter);

console.log('===task4===');

function getTags(elements) {
    var array =[];

      for (var i=0; i<elements.length; i++) {
        array.push(elements[i].tagName)
    }
    return array;
}
console.log(getTags(childElements));

console.log('===task5===');

function getClassInfo(elements) {
    return elements.classList;
}
console.log(getClassInfo(banner));

    console.log('===task6===');
    
    var li = document.querySelectorAll('nav li');

    function setDataDirection(elements) {
        elements.forEach(function (element) {
            if(!element.dataset.direction) {
                element.dataset.direction = 'top';
            }
        });
        return elements;
        }

console.log(setDataDirection(li));

});


