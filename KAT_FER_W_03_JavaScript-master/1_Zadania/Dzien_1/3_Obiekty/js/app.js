console.log('obiekt country');

var Poland = {
    capital: "Warsaw",
    population: 38000000,
    president: "Andrzej Duda",
    primeMinisters: ["Mateusz Morawiecki","Beata Szydło"],
    toString: function(){
        return this.capital+" "+this.population;
    }
};

console.log(Poland);
console.log("=======");

console.log(Poland.toString());
console.log("=======");

console.log(Poland.capital);
console.log(Poland.population);
console.log(Poland.president);
console.log(Poland.primeMinisters);

console.log("=========");
for (attr in Poland){
    console.log(Poland[attr]);
}



var Country = function( capital, population, president, primeMinisters ){
    this.capital = capital;
    this.population = population;
    this.president = president;
    this.primeMinisters = primeMinisters;
};

Country.prototype.toString = function(){
    var result = "";
    for (attr in this){
        if( typeof this[attr] != 'function')
            result += this[attr]+" ";
    }
    return result;
};


var c1 = new Country(
    "nibyStolica",
    400000,
    "Brzęczyszczykiewicz",
    ["Jan Twardowski","Buba"]
);
var c2 = new Country(
    "nibyStolica2",
    400000,
    "Brzęczyszczykiewicz2",
    ["Jan Twardowski","Buba"]
);
var c3 = new Country(
    "nibyStolica3",
    400000,
    "Brzęczyszczykiewicz3",
    ["Jan Twardowski","Buba"]
);


console.log( c1.toString() );
console.log( c2.toString() );
console.log( c3.toString() );


console.log(c1);

// ZADANIE 2
console.log ('obiekt timeMachine');

var timeMachine = {
    shape: "chair",
    model: "wooden",
    run: function (date, place) {
        console.log("moved to "+date+" in "+place);
    }
};


console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("1970-01-01","Paris");

var timeMachine2 = Object.create(timeMachine,{
    shape: {value: "wardrobe"}
});

console.log(timeMachine2);

console.log(timeMachine2.shape);
console.log(timeMachine2.model);
timeMachine2.run("1970-01-01","Paris");

// Zadanie 3
console.log ("zad1===========");

var book= {
    title: 'tytuł',
    author: 'Jan Kowalski',
    numberOfPages: 100
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);


// alternatywne tworzenie przez kontruktor:

var Book = function (title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
};
var book = new Book('Dracula', 'Bram Stoker', 150);


console.log (book.title);
console.log (book.author);
console.log (book.numberOfPages);

console.log('zad2=======');

var person = {
    name: 'imię',
    age: 15,
    sayHello: function () {
        return 'Hello'
    }
};
console.log(person);

// construct + prototype:

var Person = function (name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.sayHello = function () {
    return "Hello";
};

var somebody = new Person ('jan', 20,);
console.log(somebody);
console.log(somebody.name);
console.log(somebody.age);
console.log(somebody.sayHello());

console.log('zad3==========');

var recipe = {
    title: 'tofurnik',
    servings: 85
};
recipe.ingredients =['tofu', 'milk', 'flour', 'nuts'];

console.log(recipe);
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

console.log('zad6=========');

var spoon = {
    isExist: true
};

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);