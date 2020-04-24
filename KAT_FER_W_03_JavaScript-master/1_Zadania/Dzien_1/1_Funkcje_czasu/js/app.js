var time =  setTimeout (function () {
    console.log('zadziałam za 10 sekund');
}, 10000);

var time2 = setTimeout( function () {
    console.log('zadziałam za 4 sek')
}, 4000);
clearTimeout(time);



console.log('===task1===');


function countHello(num) {
    /* num od 1 do 10 */

    if (num === '' || typeof num === 'undefined') {
        console.log('Error: Przekazywany parametr nie może być pusty.');
        return false;
    }

    if (num > 10) {
        console.log('Error: Wartość przekazanego parametru jest większa od maksymalnego limitu.');
        return false;
    }

    if (num < 1) {
        console.log('Error: Wartość przekazanego parametru jest mniejsza od maksymalnego limitu.');
        return false;
    }

    var counter = 0;

    var interval = setInterval(function () {
        counter++;
        console.log('Hello: ' + counter);

        if (counter === num) {
            clearInterval(interval);
            console.log('STOPPED');
            return true;
        }
    }, 1000);
}
countHello(10);

