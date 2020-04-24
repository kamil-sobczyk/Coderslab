
//Zadanie 1//
var array1 = [34, 67, 82];
console.log(array1);
for (var i=0; i<array1.length; i++){
    console.log(array1[i])
}

//Zadanie 2//
var owoce=["kiwi","banan","mango"];
console.log(owoce[0]);
console.log(owoce[owoce.length-1]);

for ( var i=0; i<owoce.length; i++) {
    console.log(owoce[i])
}

//Zadanie 3//
var numb=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
for (var i =0; i<numb.length; i++) {
    sum += numb[i];
}
console.log(sum);

//Zadanie 4//
var sumOfEven = 0;
var numbers = [1,2,3,4,5,6,7,8,9,10];

for (var i = 0; i<numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        sumOfEven += numbers[i];
    }
}
console.log(sumOfEven);

//Zadanie 5//
var tab=[12,2,5,76,34,23,56,90,21,13];
var max=0;
for (var i=0; i<tab.length; i++) {
    if (tab[i] > max) {
        max = tab[i];
    }
}
    console.log(max);


//Zadanie 6//
var arrWithNumbers = [6,4,5,2,3,5,1,2,4];
var firstIndex = 0;
var match = false;
for ( var i=0; i<arrWithNumbers.length; i++) {
    var compare = arrWithNumbers[i];
    for (var j=i+1; j<arrWithNumbers.length; j++) {
        if (compare === arrWithNumbers[j]) {
            console.log(arrWithNumbers[i]);
            firstIndex = arrWithNumbers[j];
            match = true;
            break;
        }
    }
    if (match) {break;}
}

//Zadanie 7//
console.log('zad7');
var ar=[3,5,7,4,5,9,0,3,1,8];
for (var i = ar.length-1; i>=0; i--) {
    console.log(ar[i])
}

