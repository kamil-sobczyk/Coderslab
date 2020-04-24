console.log('zad4');

function getFibonacciNumbers(n) {
    var arr = [];
        arr[0] = 0;
        arr[1] = 1;
    for (var i = 2; i <= n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr;
}
console.log(getFibonacciNumbers(9));

// alternative

function getFibonacci(x) {
    if (x==0) {
        return 0;
    }

    if (x==1) {
        return 1;
    }

    var fibonacciArray = [0,1];
    for (var i=2; i<=x; i++) {
        fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);
    }

    return fibonacciArray;
}
console.log(getFibonacci(9));