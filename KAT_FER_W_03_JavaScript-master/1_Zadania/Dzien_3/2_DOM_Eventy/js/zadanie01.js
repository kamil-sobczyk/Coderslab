/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function () {



var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

});

//nie ma błędów

//po przeniesieniu tagu script do sekcji head jest błąd:
// Uncaught TypeError: Cannot read property 'classList' of null at zadanie01.js:8
//bo nie ma zdefiniowanego nasłuchiwania zdarzeń na dokumencie, żeby menu i paragraf się do czegoś odnosiły

// dodanie eventu DOMContentLoaded dla elementu document i przeniesienie kodu do środka tego eventu wyeliminowało błąd

//nie ma różnicy po przeniesieni tagu script znów na dół