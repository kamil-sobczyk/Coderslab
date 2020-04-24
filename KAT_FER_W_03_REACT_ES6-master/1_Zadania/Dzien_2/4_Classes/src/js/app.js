$(() =>{



//z wykładowcą

class Vehicle {
    constructor(name) {
        this.name = name;
    }
    getName () {
        return this.name;
    }

}

class Boat extends Vehicle {
    swim() {
        console.log(this.getName() + ' pływa');
    };
    }

class Car extends Vehicle {
    drive() {
        console.log(this.getName()+' jeździ');
    };

}

class Plane extends Vehicle {
    fly() {
        console.log(this.getName()+' lata');
    };
}

let polonez = new Car('Polonez');
polonez.drive();

let omega = new Boat ('Omega');
omega.swim();

// polonez.swim(); /błąd


//task1

class Kaczka {
    constructor (name,type) {
        this.name = name;
        this.type = type;
    };
    kwacz() {
        console.log('kwa kwa');
    }
    plywaj() {
        console.log('płynę...')
    }
    wyswietl() {
        console.log('Wygląda jak ' + this.type);
    }
    lec() {
        console.log('lecę');
    }
}


let kaczucha = new Kaczka ('kaczucha','zwykla');
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();

//task2

class DzikaKaczka extends Kaczka {
    constructor (name,type){
        super(name,type);
        this.type= 'dzika';
    }
    wyswietl() {
        console.log('Wygląda jak ' + this.type);
    }
}

let dzikaKaczucha = new DzikaKaczka('dzika kaczucha','dzika');
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();

//task3

class KrzyzowkaKaczka extends Kaczka {
    constructor (name,type) {
        super (name, type);
        this.type = 'krzyżówka';
    }
    wyswietl() {
        console.log('wygląda jak ' + this.type);
    }
}

let krzyzoKaczucha = new KrzyzowkaKaczka('krzyż', 'krzyżówka');
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();
krzyzoKaczucha.lec();


//task5

class GumowaKaczka extends Kaczka {
    constructor (name,type) {
        super (name,type);
        this.type = 'gumowa';
    }
    lec() {
        console.log('gumowa kaczki nie potrafią latać :(')
    }
}

let gumowaKaczucha = new GumowaKaczka('gum', 'gumowa');
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.lec();
gumowaKaczucha.wyswietl();






});