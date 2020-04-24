console.log("zad");

var result = 1;
var x= 5;
for (var i=1; i<=x; i++) {
    result *=i;
}
console.log(result);



//Wraz z przykładem wykorzystania funkcji//

function factorial(x) {
    var result = 1;
    for(var i=1; i<=x; i++){
        result *= i;
    }
    console.log(result); //print value
    return result; //return value
}

// 5! + 8!
var a = factorial(5);
var b = factorial(8);

console.log(a);
console.log(b);

var c = a + b;
console.log(c);

//z przykładem dokumentacji
/**
 * Calculate factorial for x
 * @param x - should be a integer
 * @returns {number} - result of factorial
 */
function factorial(x) {
    var result = 1;
    for(var i=1; i<=x; i++){
        result *= i;
    }
    console.log(result); //print value
    return result; //return value
}

// 5! + 8!
var a = factorial(5);
var b = factorial(8);

console.log(a);
console.log(b);

var c = a + b;
console.log('a! + b! ='+c);

