$(()=>{

    //z wykładowcą

    let weather = [ "snow", "rain", "sun" ];


    let [val1, , val2] = weather;
    console.log(val1, val2);



    const slider = {
        type: "infinite",
        numberOfItems: 10,
        center: true,
        autoStart: true
    };

    let {type, autoStart} = slider;
    console.log(type, autoStart);


//task1

    let names = ['ala', 'ola', 'jan'];

    let [first] = names;
    let [ ,second, ] = names;
    let [ , ,third] = names;

    console.log(first, second, third);

//task2

    let generateRandomNumbers= (min, max)=> {

        let array=[];

        for (let i=0; i<=5; i++) {
            array.push(Math.floor(Math.random() * (max - min)) + min);
        }
        return array;

    };
    generateRandomNumbers();

    let [a, , c] = generateRandomNumbers(0,5);

    console.log(a, c);

// task4


   let getAnimal = () => {
       return {
           name: "Mruczek",
           age: 10,
           getVoice: () => "miau miau"
       }
   };


let {name:catName, getVoice: catVoice} = getAnimal();
console.log(catName);
console.log(catVoice());








});