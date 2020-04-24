console.log('zad5');

function isPrimeNumber(n) {
    if (n<2) return false;
    for (var i=2; i<=Math.sqrt(n); i++) {
        if (n%i === 0)
            return false;
        else return true;
    }
}

console.log(isPrimeNumber(5));
console.log(isPrimeNumber(6));
console.log(isPrimeNumber(13));