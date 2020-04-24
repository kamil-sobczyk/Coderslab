var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34]
];

function checkArray(array2D){

    var newArray = [];

    //loop over rows
    for(var i=0; i<array2D.length; i++){

        //we belive all elements in columns are even
        var allEven = true;

        //loop over columns
        for(var j=0; j<array2D[i].length; j++){

            //if not even change our condition to false
            if( array2D[i][j] % 2 != 0){
                allEven = false;
                //break loop over columns
                break;
            }

        }

        //put info to new array
        newArray[i] = allEven;

    }

    return newArray;

}

console.log( checkArray(arr) );



//pretty version

function checkAllEven(array){

    var allEven = true;

    array.forEach( function (value) {
        if(value % 2 != 0) allEven = false;
    });

    return allEven;
}

function checkAllEven2D(array2D){

    return array2D.map( function( rowArray1D ){
        return checkAllEven(rowArray1D);
    })

}

console.log( checkAllEven2D(arr) );



var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];


var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

// ZADANIE 1
console.log (task1Array [3] [2]);
console.log (task1Array [2].length);
console.log (task1Array [4] [2]);

// ZADANIE 2.1

for (var i=0; i<task2Array.length; i++) {
    console.log(task2Array[i])
}
// albo
task2Array.forEach(function (row) {
    console.log (row);

});
// zad 2.2

for (var i=0; i<task2Array.length; i++){
    console.log (task2Array[i].length)
}
// albo
task2Array.forEach(function (row){
    console.log (row.length);
});
// zad 2.3
for (var i=0; i<task2Array.length; i++) {
    for (var j=0; j<task2Array[i].length; j++){
        console.log (task2Array [i] [j]);
    }
}
// albo

task2Array.forEach(function (row) {
    row.forEach(function (value) {
        console.log (value);
    })
});

// ZADANIE 3

function print2DArray(array) {
    array.forEach(function (row) {
        row.forEach (function (value) {
            console.log (value);
        })
    })
}
print2DArray(task2Array);

// ZADANIE 4
console.log("zad4");
var task4Array = [
    [5, 6, 5, 5],
    [5, 5, 0, 0],
    [4, 3, 2, 1]
];
print2DArray(task4Array);

// ZADANIE 5
console.log('zad5');

function create2DArray(rows, columns){

    var newArray = [];
    var counter = 0;

    //create rows
    for(var i=0; i<rows; i++){
        //create second dimension
        //init variable type for row
        newArray[i] = [];

        //insert values to columns
        for(var j=0; j<columns; j++){
            newArray[i][j] = ++counter;
        }

    }

    return newArray;

}

console.log(  create2DArray(5,10) );
//for each nie można wykorzystac