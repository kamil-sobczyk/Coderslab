/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var orders = document.querySelector('#orders');

    var orderId = document.querySelector('#orderId');
    var item = document.querySelector('#item');
    var quantity = document.querySelector('#quantity');

    var button = document.querySelector('#addBtn');

    button.addEventListener('click', function () {
        var newElement = document.createElement('tr');
        newElement.innerHTML = '<td>' + orderId.value + '</td><td>' + item.value
            + '</td><td>' + quantity.value + '</td>';

        orders.appendChild(newElement);
    });

});