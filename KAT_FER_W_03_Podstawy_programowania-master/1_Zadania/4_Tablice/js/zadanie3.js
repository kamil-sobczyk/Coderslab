console.log('ZADANIE 3');
var arr1 = [4, 55, 17, 22, 1];
var arr2 = [4, 53, 11, 22, 20];
var repeatedValues = [];

for (var i=0; i<arr1.length; i++) {
    for (var j=0; j<arr2.length; j++) {
        if (arr2[j] == arr1[i]) {
            repeatedValues.push(arr2[j]);
        }
    }
}
console.log(repeatedValues);



//
// for (var i=0; i<arr1.length; i++) {
//        for (var j=0; j<arr2.length; j++) {
//
//         if (arr1[i]==arr2[j]) {
//             repeatedValues.push(arr2[j])
//         }
//     }
// }
// console.log(repeatedValues);