console.log('znajdź różnice');

// Znajdż różnice:


function distFromAvarage(array) {
    var newArray = [];
    var avg = averageValueFromArray(array);

    array.forEach( function (value, index) {
        var distanceValue = Math.abs(value - avg);
        newArray[i] = distanceValue;
    } );
    return newArray;
}


function distFromAvarage2(array){

    var avg = averageValueFromArray(array);

    //method map creates new Array with modificated values
    var newArray = array.map( function( val ){
        return Math.abs( val - avg );
    });

    return newArray;

}


function sumArrayElements(array){
    var sum = 0;
    array.forEach( function(val){
        sum += val;
    });
    return sum;
}

function averageValueFromArray(array){
    return Math.ceil( sumArrayElements(array) / array.length );
}


//TESTS
console.log( distFromAvarage([1,2,3,4,5,6,7]) );
console.log( distFromAvarage([1,1,1,1]) );
console.log( distFromAvarage([2,8,3,7]) );

console.log( distFromAvarage2([1,2,3,4,5,6,7]) );
console.log( distFromAvarage2([1,1,1,1]) );
console.log( distFromAvarage2([2,8,3,7]) );

//ZADANIE 1
console.log('zad1');


    var fruit = ['kiwi', 'mango', 'banan', 'kokos'];

    console.log (fruit[0]);
    console.log (fruit [fruit.length-1]);

    for (var i=0; i<fruit.length; i++) {
        console.log(fruit [i]);
    }

console.log('metoda foreach');
    fruit.forEach(function (value) {
        console.log(value);
    });


// ZADANIE 3
console.log('task3');

var arr = [3,5,76,34,67,23,9];

function printTable(array) {
    for (var i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}
printTable(arr);

console.log('metoda');
arr.forEach(function (value) {
   console.log(value);
});

// ZADANIE 4
console.log('task4');
var arr1= [1,2,3,4,5,6,7];
var arr2= [2,8,3,7];

function multiply(array) {
    var multiplication = 1;
    for (i=0; i<array.length; i++) {
        multiplication *= array[i];
    }
    return multiplication;
}
console.log(multiply(arr1));
console.log(multiply(arr2));

console.log('metoda:');

function multi(array) {
    var result = 1;
    array.forEach(function (value) {
        result *= value;
    });
    return result;
}
console.log(multi(arr1));


// ZADANIE 5
console.log('zadanie5');

var arr3 = [1,2,3,4,5,6,7];
var arr4 = [1,1,1,1];
var arr5 = [2,8,3,7,4];

function getEven (array) {
    var evenArray = [];
    for (var i=0; i<array.length; i++) {
        if (array[i]%2==0) {
            evenArray.push(array[i]);
        }
    }
    var sum = 0;
    if (evenArray.length == 0) return null;
    for (var j=0; j<evenArray.length; j++) {
        sum += evenArray[j];}
    return sum/evenArray.length;
}


console.log(getEven(arr3));
console.log(getEven(arr4));
console.log(getEven(arr5));


// ZADANIE 6
console.log('zadanie6');

var arr1 = [145,11,3,64,4,6,10];
}
function sortArray (array){
    array.sort (function (a,b) {
        return a-b;
    });
    return array;
}
console.log(sortArray(arr1));


// ZADANIE 7
console.log('zadanie7');
function addArrays(arr1, arr2){

    var longArr = arr1;
    var shortArr = arr2;

    if(arr2.length>=arr1.length){
         longArr = arr2;
         shortArr = arr1;
    }

    // var newArray = [];
    //
    // longArr.forEach( function( value, index ){
    //     if( shortArr[index] ){
    //         newArray[index] = value + shortArr[index];
    //         // newArray.push( value + shortArr[index] );
    //     }else{
    //         newArray[index] = value;
    //         // newArray.push( value );
    //     }
    // });

// ALTERNATYWA:
    var newArray = longArr.map( function( value, index ){
        if( shortArr[index] ){
            return value + shortArr[index];
        }else{
            return value;
        }
    });


    return newArray;

}


var res1 = addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
var res2 = addArrays([8,3,22], [1,3,2]);
var res3 = addArrays([2,3,1,5,3,5], [3,1,76,1]);

console.log(res1);
console.log(res2);
console.log(res3);




