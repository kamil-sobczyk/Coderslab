

    //z wykładowcą

    let namesA = ["Zosia", "Marcin", "Kamil"];
    // let namesB = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil","Jan", "Karol" ]; doeclowo

    let namesB = ['Ala', 'Puszek', ...namesA, "jan", "Karol"];

    console.log(namesB);




    // function getAverage(...args) {
    //     let suma = [...args].reduce(function (a, b) {
    //         return a + b;
    //     });
    //     let iloscElementow = [...args].length;
    //
    //     return suma / iloscElementow;
    // }



    let getAverage = (...args) => {
        return [...args].reduce( (a,b) => {
            return (a+b) / [...args].length;
        })

    };

    console.log(getAverage(2,4,5,6,7,79));


    //task1

    let name = 'magda';

    let arrName = [...name];

    console.log(arrName);


//task2

    let fruits = ['kiwi', 'banan', 'mango'];
    let vege = ['carrot', 'onion'];

    let mix = [...fruits, ...vege];

    console.log(mix);





