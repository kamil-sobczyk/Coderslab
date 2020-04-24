//task1
var numb1 = 15;
var numb2 = 24;

if (numb1 > numb2) {
    console.log(numb1)
}
else {
    console.log(numb2);
}

//task2
var num1 = 12;
var num2 = 87;
var num3 = 56;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else {
    console.log(num3);
}

//task3
for (var i = 0; i < 10; i++) {
    console.log('Lubię JavaScript');
}

//task4

var result = 0;

for (var i = 1; i <=10; i++) {
    result = result +i;
}
console.log(result);

//Zadanie 4
var result = 0;
for (var i=0; i<=10; i++) {
    result +=i;
}
console.log(result);

//task5
var n=7;

for (var i=0;i<=n;i++) {
    if (i%2 === 0) {
        console.log(i + "- parzysta")
    }
    else {
        console.log(i + "- nieparzysta");
    }
}

//task6
for (var i=0; i<5; i++) {
    for (var j=0; j<7; j++) {
        console.log("i=" + i + " j=" + j);
    }
}

//task7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}


//task8

var square = 5;
var line = '';

for (var i = 0; i < 1; i++) {
    line= '';
    for (var j= i; j<square; j++) {
        line = line + '*';
    console.log('');
    console.log(line);
    }
}

//task9
console.log('task9');

var nn = 5;
var newLine = "";

for (var i = 0; i<nn; i++) {
    newLine = "";
    for ( var j=0; j<=i; j++) {
        newLine = newLine + "*";}
    for ( var j=i+2; j < nn+1; j++){
        newLine = newLine + j;}
    console.log(newLine);
}
for (var i = nn; i>0; i--) {
    newLine = "";
    for (var j = 0; j<i; j++) {
        newLine = newLine + "*";}
    for (var j= i+1; j<nn+1; j++) {
        newLine = newLine + j;}
        console.log(newLine);
    }

// // ZADanie 10
// var nr = 3;
// var result = 0;
// var line ="";
// for (var i =1; i<=nr; i++){
//     line="";
//     for (j=i; j<=nr; j++){
//         result = i*j;
//         if (j==nr) {
//             line = line + i + "*" + j + "=" + result;
//         }
//         else {
//             line = line + i + "*" + j + "=" + result + "|";
//         }
//     }
//     console.log(line);
// }

