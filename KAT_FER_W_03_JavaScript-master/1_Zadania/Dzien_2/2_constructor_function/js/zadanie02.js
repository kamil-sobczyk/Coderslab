console.log('===task2 calculator===');


function Calculator() {
    this.history = [];
}
Calculator.prototype.add = function (num1, num2) {
    var result = num1 + num2;
    this.history.push("added " + num1 + "to " + num2 +"got " + result);
    return result;
};
Calculator.prototype.multiply = function (num1, num2) {
    var result = num1 * num2;
    this.history.push("multiplied "+ num1 + "with " +num2+ "got "+ result);
};
Calculator.prototype.substract = function (num1, num2) {
    var result = num1 - num2;
    this.history.push("substracted "+ num1 +"by "+ num2+ "got "+ result);
};
Calculator.prototype.divide = function (num1, num2) {
    var result = num1 / num2;
    this.history.push("divided "+ num1+ "by " +num2+ "got "+ result);
};
Calculator.prototype.printOperations = function () {
    console.log(this.history);
};
Calculator.prototype.clearOperations = function () {
    console.log(this.history = []);
};
var calc = new Calculator();
calc.add(3,4);
calc.multiply(5,6);
calc.substract(9,4);
calc.divide(8,3);
calc.printOperations();
calc.clearOperations();



