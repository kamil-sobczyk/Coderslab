
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funckji nadrzędnej
function sortArray() {
    
        //deklaracja zmiennej lokalnej -tablicy zdefiniowana dla funkcji nadrzędnej
        var points = [41, 3, 6, 1, 114, 54, 64];

        //wywołanie funkcji "sort" na tablicy "points"
        points.sort(function(a, b){
            //zwraca porównanie dwóch liczb
            return a-b;
        });
    
        //zwrócenie wartości tablicy po posortowaniu
        return points;
    }
    
    //pierwsze wywołanie fukcji nadrzędnej
    sortArray();
    