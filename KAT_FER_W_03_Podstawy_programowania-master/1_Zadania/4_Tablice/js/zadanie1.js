//Przykłady:
var array = [
    1,
    "Hello JS",
    3,
    {
        'name': 'Brunek',
        'type': 'Cat'
    },
    [3,4,3]
];

console.log(''+array[0] ); // 1
console.log(''+array[1] ); // "Hello JS"
console.log(''+array[2] ); // 3
console.log( array[3] ); // [object Object]
console.log(''+array[3].name ); // "Brunek"
console.log(''+array[3].type); // "Cat"

//TWODIMENDION ARRAY
console.log(array[4]); // 3,4,5
console.log(array[4][1]); // 4

console.log(array.length); //5
console.log(array[4].length); //3 - array length of included array

console.log('==============');
for(var i=0; i<array.length; i++){
    console.log( array[i] );
}

//alternative to go for each row
array.forEach(function(value, i){
    //value == current row value
    //i == array key
    console.log('row: '+i);
    console.log(value);
});

//ZADANIA z wykładowcą:
console.log('Zad 1');//wypisywanie tablicy
var arr1 = [0,1,2,3,4,5,6,7,8,9,10,11];
var arr2 = [];

for(var i=0; i<12; i++){
    arr2.push(i);
}
console.log(arr2);


console.log('Zad 2');//powtórki w tablicy

var randomArr = [];
for(var i=0; i<10; i++) {
    var random = Math.ceil( Math.random() * (10-1) + 1 ); //(max-min) + min
    randomArr.push(random);
}
console.log(randomArr);

//find repeated
var repeatedValues = [];

for(var i=0; i<randomArr.length-1; i++){
    var valueToCheck = randomArr[i];

    //checking next elements
    for(var j=i+1; j<randomArr.length; j++){
        //add to array if repeated and not exist in array
        if(valueToCheck == randomArr[j] && repeatedValues.indexOf(valueToCheck) == -1 ){
            repeatedValues.push(valueToCheck);
        }
    }
}
console.log(repeatedValues);
console.log(repeatedValues.length);

console.log('Zad 3');//liczba znaków każdego wyrazu
var string =  'My name is Bond, James Bond';

var stringArr = string.split(' ');
console.log(stringArr);

var textLine = '';
stringArr.forEach(function(value){
    textLine += value.replace(',','').length+',';
});
console.log(textLine.substr(0, textLine.length -1));


console.log('ZADANIE');
//zadanie samodzielne nr 1
var avg=[4,4,1,2,5,40];
var wynik = 0;

for (var i=0; i<avg.length; i++) {
    wynik += avg[i] / avg.length;
}
console.log(wynik);


