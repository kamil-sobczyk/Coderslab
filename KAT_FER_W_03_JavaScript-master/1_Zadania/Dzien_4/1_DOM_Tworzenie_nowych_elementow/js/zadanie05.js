/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function () {

    var list1 = document.querySelector('#list1');
    var list2 = document.querySelector('#list2');

    var moveButtons = document.querySelectorAll('.moveBtn');

    moveButtons.forEach(function (moveButton) {

        moveButton.addEventListener('click', function () {
            var parentId = this.parentElement.parentElement.id;
            var li = this.parentElement;

            switch (parentId) {
                case 'list1':
                    list2.appendChild(li);
                    break;
                case 'list2':
                    list1.appendChild(li);
                    break;
                default:
                    break;
            }
        });

    });

});

// document.addEventListener('DOMContentLoaded', function () {
//
//     var buttons = document.querySelectorAll('.moveBtn');
//
//     buttons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             var listItem = button.parentElement;
//             console.log(listItem);
//             var list1 = document.querySelector('#list1');
//             var list2 = document.querySelector('#list2');
//
//             var listId = button.parentElement.parentElement.id;
//
//             if (listId === 'list1') {
//                 list2.appendChild(listItem);
//             } else {
//                 list1.appendChild(listItem);
//             }
//         });
//     });
// });


