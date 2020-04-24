function myEval(a, b, operation) {
    var result = 0;
    switch(operation) {
        case'+': result = a + b; break;
        case'-': result = a - b; break;
        case'/': result = a / b; break;
        case'*': result = a * b; break;
        case'%': result = a % b; break;
        case'^': result = Math.pow(a, b); break;
    }
    return result;
}

console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 6 / 3 = " + myEval(6, 3, "/"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 4 * 5 = " + myEval(4, 5, "*"));
console.log(" 9 % 3 = " + myEval(9, 3, "%"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
