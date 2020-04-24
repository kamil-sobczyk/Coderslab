//z wykładowcą

const x = 3;
let temp = 5;

console.log(temp);
console.log(x);

for (let i=0; i<9; i++) { //let w pętli
    console.log(i);
}
console.log (i); //let poza pętlą nie działa
//
// for (const j =0; j<5; j++) {
//     // console.log(j); //tylko pierwsza wartość, czyli 0, potem błąd przypisania innej wartości do const
// }

// console.log(j); //const w ogóle nie nadaje sie do pętli bo nie może zmieniać wartości



function check() {
    let y=5;
    console.log(y);
}
check();
// console.log(y); błąd

function checkConst(){
    const pi=3.14;
    console.log(pi);
}
checkConst();
// console.log(pi); błąd bo zdefiniowane w funckji



console.log('next task');

//I. Sprawdź najpierw zasięg let
{
    //A1 - wypisuję zmienną numbers przed deklaracją
    //Wynik w konsoli to TODO: żaden
    //Dlaczego taki wynik? TODO: ponieważ brak deklaracji zmiennej
    // console.log(numbers);


    let numbers = [2,3, 4];
    //A2 - wypisuję zmienną numbers po deklaracji
    //Wynik w konsoli to TODO: (3) [2, 3, 4]
    //Dlaczego taki wynik? TODO: ponieważ zmienna wypisane jest po deklaracji
    console.log(numbers);
}

//A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to TODO: numbers is not defined
//Dlaczego taki wynik? TODO: ponieważ zadeklarowana za blokiem
// console.log(numbers);



//II. Sprawdź teraz  zasięg const
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: Pi is not defined
    //Dlaczego taki wynik? TODO: bo przed deklaracją
    // console.log(Pi);

    const PI = 3.14;
    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: jest ok
    //Dlaczego taki wynik? TODO: bo chcę ja po zdeklarowaniu
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: PI is not defined
//Dlaczego taki wynik? TODO: bo za blokiem nie działa
// console.log(PI);


// task2

let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';

{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
    // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego: pod zmiennymi są zadeklarowane w bloku let i wcześniejsza const
    // Teraz jest: noc i Fiona to: ogrzyca, a jej ukochany to: Shrek - let zadeklarowane w bloku, a const ok
}

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego: pod zmiennymi są wartości zadeklarowane przed blokiem let i const
// Teraz jest: dzień i Fiona to: księżniczka, a jej ukochany to: Shrek

// task3


for (var i=0; i<10; i++) {
    console.log(i);
}

console.log(i); //poza pętlą wypisuje 10

for (let j = 0; j<10; j++) {
    console.log(j);
}
// console.log(j); //poza pętlą j is not defined

//task4


//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
// name = "anna"; //ide nie pozwala, błąd w cosnoli mówiący o próbie przypisania const nowej wartości


//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1,2,3,4];
// simpleArray = [2,5,8,9]; błąd w cosnoli mówiący o próbie przypisania const nowej wartości
simpleArray.push(5);
console.log(simpleArray); //ok, dodano nową wartość

simpleArray[1]=3;
console.log(simpleArray); // ok, można zmienić


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
};
// dog = {
//     name: "reks";
//     skill: "barking"
// }; not allowed

dog.skill = 'barking';
console.log(dog); //ok

dog.favFood = 'bread';
console.log(dog); //ok


//task5

(function (){
    console.log('hello world');
})
();

//task6

(function(surname){
    console.log(surname);
})
('hanna');