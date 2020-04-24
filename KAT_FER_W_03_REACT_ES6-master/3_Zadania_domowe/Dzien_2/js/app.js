$(() => {

//task1

class Insect {
    constructor(name, legs, type) {
        this.name = name;
        this.legs = legs;
        this.type = type;
    }

    getLegs() {
        console.log('czesc mam na imię ' + this.name + ' jestem ' + this.type + ' i mam ' + this.legs + ' nóg');
    }
}


class Centipede extends Insect {
    constructor (name,legs, type){
        super(name,legs, type);
        this.name = 'lucy';
        this.legs = 20;
        this.type = 'centipede';
}
getLegs() {
    console.log('czesc mam na imię ' + this.name + ' jestem ' + this.type + ' i mam ' + this.legs + ' nóg');
}

}

let stonoga = new Centipede('lucy', 6, 'centipede');
stonoga.getLegs();

class Spider extends Insect {
    constructor(name,legs,type){
        super(name,legs,type);
        this.name = 'majkel';
        this.legs = 8;
        this.type = 'spider'
    }
    getLegs() {
        console.log('czesc mam na imię ' + this.name + ' jestem ' + this.type + ' i mam ' + this.legs + ' nóg');
    }
}

let pajak = new Spider ('majkel', 20, 'spider');
pajak.getLegs();

//task2
//
    let saySomething =() => {
         return {
            name: "Wally",
            age: 2,
            proffesion: "Naprawianie innych robotów"
        }
    };
let {name:name, age:age, proffesion:proffesion} = saySomething();

console.log('czesc mam na imię ' + name + ' mam ' + age + ' lata, a moim zajęciem jest ' + proffesion);

//czemu nie tak: ???
//     let saySomething =() => {
//         let wally = {
//             name: "Wally",
//             age: 2,
//             proffesion: "Naprawianie innych robotów"
//         }
//     };
//     let {name:name, age:age, proffesion:proffesion} = saySomething();
//
//     console.log('czesc mam na imię ' + name + ' mam ' + age + ' lata, a moim zajęciem jest ' + proffesion);



//task3

    let sayHello= (...args) => {
        [...args].forEach((e)=>{(console.log('hello: ' + e))});
    };

    sayHello("Ania", "Kasia", "Steve", "Bogumił");
});