console.log('task6');

function getPi(n) {
    var x = 1;
    var pi = 0;
    for (var i=0; i<n; i++) {
        pi = pi + (1/x - 1/(x+2));
        var x = x+4;
    }
    return (4*pi);
}
console.log(getPi(3));