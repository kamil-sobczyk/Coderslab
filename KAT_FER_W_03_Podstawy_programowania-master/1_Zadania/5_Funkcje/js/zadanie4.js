console.log('zad4');

var array = [1,2,3];

 function sumOfNumbers (array) {
     var result = 0;
     for (var i=0; i<array.length; i++) {
         result += array[i];
     }
     return result;
 }
console.log(sumOfNumbers(array));
