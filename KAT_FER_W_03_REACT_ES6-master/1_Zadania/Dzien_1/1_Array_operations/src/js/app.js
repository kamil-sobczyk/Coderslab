// z wykładowcą

var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

function letters(el){
    return el.length;
}

var result = cities.map(letters);

console.log(result);

//task1

function randomize(param1, param2, callback) {
    if (typeof callback !== 'function') {
        console.log('nie jest funkcją')
    }
    else {
        callback (param1, param2);
    }
}

randomize(2,15, function (a,b) {
    console.log(Math.floor(Math.random() * (a-b) + b));

});


//task2

var animals = ["cat", "shrimp", "giraffe"];

animals.forEach(function (el) {
    console.log(el);
});

//task 3

var years = [1995, 1856, 2014, 1987];


function fn(element) {
    var now = new Date;
    return now.getFullYear() - element;
}

console.log(years.map(fn));


// task4

var arr = [2,5,96,47,53];


function sum(prev, curr){
    return prev + curr;
}

function multiply (prev, curr) {
    return prev*curr
}
 var result1 = arr.reduce(sum);
var result2 = arr.reduce(multiply);



console.log(result1, result2);