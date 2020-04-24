$(() => {

class Product {
    constructor(title, author, selector) {
        this.title = title;
        this.author = author;
        this.selector = selector;
    }

    updateInfo() {
        this.selector = $(this).children().eq(1).text('Tytuł: ' + this.title);
        this.selector = $(this).children().eq(2).text('Autor: ' + this.author);
    }

    download() {
        return 'Ściąganie...' + this.title;
        console.log('Ściąganie...' + this.title);
    }
    order() {
        return 'Podaj adres dostawy!';
        console.log('Podaj adres dostawy!')
    }
}

class Ebook extends Product {
    constructor (title, author, selector) {
        super(title,author);
        // super.title = 'Ciemniejsze niebo';
        // super.author = 'Ruben Eliassen';
        this.selector = $('.ebook');
    }
    download() {
        return 'Ściąganie...' + this.title;
        console.log('Ściąganie...' + this.title);
    }
    order() {
        return 'Podaj adres dostawy!';
        console.log('Podaj adres dostawy!')
    }

}



class Book extends Product {
    constructor(title, author) {
        // super.title = 'Najdłuższa noc';
        // this.author = 'Maciej Dancewicz';
        this.selector = $('.book');
    }
    download() {
        return 'Ściąganie...' + this.title;
        console.log('Ściąganie...' + this.title);
    }
    order() {
        return 'Podaj adres dostawy!';
        console.log('Podaj adres dostawy!')
    }
}

let ebook = new Ebook ('Ciemniejsze niebo','Ruben Eliassen');
ebook.updateInfo();
let book = new Boook ('Najdłuższa noc', 'Maciej Dancewicz');
ebook.updateInfo();



var sciagnij = $('.ebook').find('button');
sciagnij.on('click', function () {
    download();
})

var zamow = $('.book').find('button');
zamow.on('click', function () {
    order();
})


});