//FOOBAR
function FooBar (n) {

    var text = '';
    for (var i=1; i<=n; i++) {
        if (i%3==0 && i%5==0) {
            text += 'FOOBAR'
        } else if (i%3 == 0) {
            text += 'Foo'
        }
        else if (i%5==0) {
            text += 'Bar'
        } else {
            text += i;
        }
    }
    return text;
}
console.log(FooBar(15));


//obliczanie potęgi

var pow = function (a,n) {
    var result = a;
    for (var i=1; i<n; i++) {
        result *= a;
    }
    return result;
};

console.log( pow(2,2) );
console.log( pow(2,4) );
console.log( pow(3,3) );
console.log( pow(1024,1024) );

//ZADANIA SAMODZIELNE

console.log('Zadanie 1');

function miksowanie (value) {
    if (typeof value == 'string') {
        return "zmiksowana " + value;
    }
}
console.log(miksowanie('marchew'));
console.log(miksowanie(3));
console.log(miksowanie('pietruszka'));
