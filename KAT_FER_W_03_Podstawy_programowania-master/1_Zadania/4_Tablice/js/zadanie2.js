console.log('ZADANIE 2 ');

randomArray = [];
modifiedArray = [];
for (var i=0; i<10; i++) {
    var random = Math.ceil(Math.random() * (60 - 1) + 1);
    randomArray.push(random);
    for (var j = i; j < randomArray.length; j++) {
        if (random%2 !== 0) {
        var modified = random + 1;}
        else (modified = random)}
        modifiedArray.push(modified);
    }

console.log(randomArray);
console.log(modifiedArray);




//
// var randomArr=[];
// var modifiedArr=[];
// for (var i=0; i<10; i++) {
//     var random = Math.ceil (Math.random() * (60-1) + 1 );
//     randomArr.push(random);
//     for (var j=i; j<randomArr.length; j++) {
//         var modified=random+1;
//         modifiedArr.push(modified);
//     }
// }
// console.log(randomArr);
// console.log(modifiedArr);




