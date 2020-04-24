console.log('===różne koszyki dla różnych klientów====');

function Basket() {
    this.products = [];
    this.sum = 0;
}
Basket.prototype.addProduct = function (name, price) {
    this.products.push({name: name, price: price});
    this.sum += price;
};
Basket.prototype.showBasket = function () {
    console.log('zawartość koszyka', this.products);
    console.log("Suma: ", this.sum);

};
var koszykAni = new Basket();
koszykAni.addProduct('pomidor',15);
koszykAni.addProduct('marchew', 3);
koszykAni.addProduct('ananasy', 38);
koszykAni.showBasket();


var b = new Basket();
b.addProduct('pomidor', 10);
b.addProduct('jablko', 3);
b.showBasket();


var c = new Basket();
c.addProduct('ananas', 8);
c.addProduct('maliny', 12);
c.showBasket();

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();