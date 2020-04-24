console.log('zad1');


var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
function getSecondMaxNumber (array) {
    var maxNumber = 0;
    var second = 0;
    for (var i=0; i<array.length; i++) {
        if ( array[i] > maxNumber) {
            maxNumber = arr1[i];
        }
    }
    for ( var j= 0; j < array.length; j++) {
        if ( (array[j] < maxNumber) && (array[j] > second))
            // if ( (array[j] > second) && (array[j]!== max))
            {
            second = array[j];
        }
    }
    return second;
}
console.log(getSecondMaxNumber(arr1));

