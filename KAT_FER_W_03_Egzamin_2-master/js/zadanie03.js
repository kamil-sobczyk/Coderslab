function bigestSumOfTwoElements(array){
       var first = 0;
       var second = 0;
       var sum = 0;

       for (var i=0; i<array.length; i++) {
           if (array[i] > first) {
               first = array[i];
           }
       }
       for (var j=0; j<array.length; j++) {
           if ((array[j] > second) && (array[j] !== first)) {
                   second = array[j]
           }
       }
       sum = first + second;

    if (array.length === 1) {
        return array[0];
    }
    else if (array.length === 0) {
        return false
    }
    else return sum;

}
console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));
