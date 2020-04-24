console.log('===task1====');


function getNumber (number, array) {
    var exist = false;
    array.forEach(function (value) {
        if (value == number)
            exist = true;
    });
    return exist;
}

console.log(getNumber(2, [33, 54, 2, 1, 4, 100])); //true
console.log(getNumber(5, [33, 54, 2, 1, 4, 100] )); //false

console.log('===task2===');

function createIdentityMatrix (rows,columns) {
    var new2DArray = [];
    for (var i=0; i<rows; i++) {
        new2DArray[i] = [];
        for (var j=0; j<columns; j++) {
            if (j==i) new2DArray [i] [j] =1;
            else new2DArray [i][j] = 0;
        }
    }
    return new2DArray;
}

console.log(createIdentityMatrix(4,4));

console.log('====task3===');