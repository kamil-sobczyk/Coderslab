console.log('task7');

// Napisz funckję whatNumber(n), która jako argument przyjmuje liczbę n. Funkcja ma zwracać informację czy podana liczba n jest liczbą doskonałą, niekompletną czy żadną z tych . Jeśli liczba jest doskonała zwróć -> "doskonała" Jeżeli liczba jest niekompletna zwróć -> "niekompletna" Jeżeli liczba nie jest ani doskonała ani niekompletna zwróć -> false
//
// Liczba doskonała to taka liczba, która jest sumą wszystkich swoich dzielników. Jest to np. 6:
//
// 6 = 3 + 2 + 1
// Liczba niekompletna to taka liczba, która jest większa od sumy wszystkich swoich dzielników. Jest to np. 10:

function whatNumber(n) {
    var divisors = [];
    for (var i = 0; i < n; i++) {
        if (n % i == 0) {
            divisors.push(i);
        }
    }
    var sum = 0;
    for (var j = 0; j < divisors.length; j++) {
        var sum = sum + divisors[j];
    }
    if (sum === n) {
        return "doskonała";
    }
    else if (sum > n) {
        return "niekompletna";
    }
    else {
        return false;
    }
}

console.log(whatNumber(6));
console.log(whatNumber(10));
console.log(whatNumber(8));
console.log(whatNumber(12));
