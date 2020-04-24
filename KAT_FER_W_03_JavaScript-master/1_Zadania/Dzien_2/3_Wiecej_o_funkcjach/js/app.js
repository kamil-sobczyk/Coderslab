/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// Funkcja nadrzędna
function jeden() {

    // Zmienna1, funkcji nadrzędnej
    var zmienna1 = 1;

    // Deklaracja funkcji podrzędnej
    function dwa() {

        // Wyświetlenie wartości zmiennej z zakresu funkcji nadrzędnej
        console.log('Wartość zmiennej w funkcji nadrzędnej: '+zmienna1);

        // Zmienna lokalna dla funkcji dwa()
        var zmienna2 = 3;
    }

    // Wywołanie w funkcji nadrzędnej jeden() funkcji podrzędnej dwa()
    dwa();

    // Wyświetlenie wartości lokalnej zmienna2 funkcji dwa()
    console.log(zmienna2)
}

// Wywołanie funkcji nadrzędnej, najwyższej w hierarchii jeden()
    jeden();