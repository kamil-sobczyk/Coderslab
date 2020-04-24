console.log('zad6');

function rentCost(days) {
    var cost = 0;
    var numbersOfWeeks = Math.floor(days/7);
    for (var i=1; i<=days; i++) {
        if (days == 1) {
            cost = 200;
        }
        else if ( days == 2 || days == 3) {
            cost = days * 180;
        }
        else if (days === 4 || days === 5 || days === 6 || days === 7) {
            cost = days * 160;
        }
        else {
            cost = days * 150
        }
    }
    for (var j=1; j<=numbersOfWeeks; j++) {
        if (numbersOfWeeks>=j) {
            cost -=50;
        }
    }
    console.log(cost);
}
rentCost(8);
rentCost(4);
rentCost(20);
