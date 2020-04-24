$(() => {

//z wykładowcą

    const person = {
        name: "Vlad",
        lastName: "Drăculea",
        yearOfBirth: 1431,
        proffesion: "Lord of Wallachia"
    };

// function whoAreYou (obj){
//     console.log(`My name is ${obj.name} ${obj.lastName}.
//      I am ${2018 - obj.yearOfBirth} years old.
//      My profession i ${obj.profession}`);
// }

    let whoAreYou = (obj) => {
        console.log(`My name is ${obj.name} ${obj.lastName}.
     I am ${2018 - obj.yearOfBirth} years old.
     My profession i ${obj.profession}`);
    };


    whoAreYou(person);


//task1

let num1 = 15;
let num2 = 23;
let sum = num1 + num2;

console.log(`suma dwóch liczb ${num1} i ${num2} to ${sum}`)


//task2

var name = "Magda";

console.log(`moje imię i nazwisko to ${name} Strojwas`)


//task3

    let write = ()=> {
    let tekst= `"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock`;
        return tekst;
    };

    console.log(write());

$('.cite').text(write());



//task4

let arr1 = [1,2,5,9, 'string'] ;

    let f = (arr) => {
        console.log(...arr);

    };

    f(`${arr1}`);

//task5

    const button = {
        value: "Send message",
        idName: "sendMsg",
        width: "100px",
        padding: "20px",
    };



    let cytat =`to jest button
    jego szerokość to ${button.width}.
    Napis, który na nim widnieje to "${button.idName}"`;

    console.log('cytat');


    var newBtn = $('<button>');
    newBtn.css('width', `${button.width}`);
    newBtn.css('padding', `${button.padding}`);
    newBtn.attr('idName', `${button.idName}`);
    newBtn.val(`${button.value}`);
    newBtn.text(`${button.value}`);


$('.cite').append(newBtn);


});