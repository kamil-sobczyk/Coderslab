console.log('===car + task1===');

function Car (brand, color, km) {
    this.brand = brand;
    this.color = color;
    this.numberOfKilometers = km;
}
Car.prototype.inspections = [];


Car.prototype.printCarInfo = function () {
  console.log(this.color, this.brand, this.numberOfKilometers )
};
Car.prototype.drive = function (km) {
    this.numberOfKilometers += km;
};
Car.prototype.addInspection = function (date) {
    this.inspections.push(date);
};

Car.prototype.allInspections = function () {
    console.log(this.inspections);
};

var merc = new Car ("Mercedes", "black", 2 );
merc.printCarInfo();
merc.drive(20);
merc.printCarInfo();
merc.addInspection('listopad 2016');
merc.addInspection('marzec 2017');
merc.addInspection('wrzesień 2018');
merc.allInspections();


//
// Car.prototype.printCarInfo = function (){
//     console.log(this.color, this.brand+',',this.numberOfKilometers, 'km');
//     console.log('Przeglądy', this.inspections);
// };
//

var vw = new Car('VW Passat', 'granatowy', 190);
vw.printCarInfo();
vw.drive(10);
vw.addInspection('2018-03-03');
vw.printCarInfo();

var bmw = new Car('BMW M3', 'biały', 50);
bmw.printCarInfo();
bmw.drive(250);
bmw.addInspection('2017-03-15');
bmw.printCarInfo();
bmw.addInspection('styczeń 2018');
bmw.allInspections();


console.log('===task3===');

var stairs = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    printStep: function() {
        console.log('Aktualny schodek:', this.step);
    }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();

