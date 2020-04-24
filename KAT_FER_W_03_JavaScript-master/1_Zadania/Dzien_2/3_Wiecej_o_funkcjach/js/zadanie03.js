sayHello();
function sayHello() {
    console.log('cześć');
}
sayHello();
// funkcje mozna wywołać po jej definicji lub przed



foo(); // nie można wywołać wyrażenia funkcyjnego przed definicją
var foo = function () {
    console.log('witaj');
};
foo(); // wyrażenie funkcyjne można wywołac tylko po definicji
