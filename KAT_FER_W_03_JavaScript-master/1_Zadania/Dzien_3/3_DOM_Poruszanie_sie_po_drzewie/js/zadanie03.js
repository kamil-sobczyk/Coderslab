/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var divs = document.querySelectorAll('.listContainer');

    divs.forEach(function (div) {
        div.addEventListener('mouseover',function () {
            var lis = this.firstElementChild.children;
            for (var i = 0; i< lis.length; i++) {
                lis[i].style.backgroundColor = 'green';
            }
            this.children[0].firstElementChild.style.backgroundColor = 'red';
            this.firstElementChild.lastElementChild.style.backgroundColor = 'blue';
        } )
    })
    
});


 
