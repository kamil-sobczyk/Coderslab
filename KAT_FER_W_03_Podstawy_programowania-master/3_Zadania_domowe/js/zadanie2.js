console.log('zad2');

var arr1 = [4, -5, 0, 2, -67, 8, 10, -34];
 function getNegativeNumbers(array) {
     var negativeArray = [];
     for (var i =0; i<array.length; i++) {
         if ( array[i] < 0 ) {
             negativeArray.push(array[i])
         }
     }
     return negativeArray;
 }
console.log(getNegativeNumbers(arr1));

