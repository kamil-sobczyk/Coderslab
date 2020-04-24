/**
 * Created by Jacek on 2016-01-12.
 */
// document.addEventListener('DOMContentLoaded', function () {
//
// var input = document.querySelector('input');
// var cardName = document.querySelector('#type);
//
// input.addEventListener('keyup', function () {
//     if (this.value.indexOf('4') === 0) {
//         cardName.innerText = 'Visa';
//     }
//     if (this.value.indexOf('5') === 0) {
//         cardName.innerText = 'Mstrcard;'
//     }
//     if ((this.value.indexOf('3') === 0) && (this.value.indexOf('4') === 1 || this.value.indexOf('7') === 1) ) {
//         cardName.innerText = 'AmEx';
//     }
// })
//
// });

document.addEventListener("DOMContentLoaded", function () {

    var form = document.querySelector('form');

    var cardNumber = document.querySelector('#name');
    var cardType = document.querySelector('#type');

    cardNumber.addEventListener('keyup', function () {
        switch (this.value[0]) {
            case '4':
                cardType.innerText = 'VISA';
                cardType.dataset.type = 'visa';
                if (cardNumber.value.length >= 13 && cardNumber.value.length <= 16) {
                    console.log('valid');
                    cardNumber.classList.remove('invalid');
                    cardNumber.classList.add('valid');
                } else {
                    cardNumber.classList.remove('valid');
                    cardNumber.classList.add('invalid');
                }
                break;
            case '5':
                cardType.innerText = 'MASTERCARD';
                cardType.dataset.type = 'mastercard';
                if (cardNumber.value.length === 16) {
                    cardNumber.classList.remove('invalid');
                    cardNumber.classList.add('valid');
                } else {
                    cardNumber.classList.remove('valid');
                    cardNumber.classList.add('invalid');
                }
                break;
            case '3':
                if (this.value[1] === '4' || this.value[1] === '7') {
                    cardType.innerText = 'AMEX';
                    if (cardNumber.value.length === 15) {
                        cardNumber.classList.remove('invalid');
                        cardNumber.classList.add('valid');
                    } else {
                        cardNumber.classList.remove('valid');
                        cardNumber.classList.add('invalid');
                    }
                }
                break;
            default:
                cardType.innerText = '';
                cardNumber.classList.remove('valid');
                cardNumber.classList.remove('invalid');
                break;
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });

});