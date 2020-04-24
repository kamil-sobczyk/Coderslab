/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

    var tips = document.querySelectorAll('.tooltip');
    // console.log(tips);

    tips.forEach(function (tip) {

        var newSpan = document.createElement('span');

        tip.addEventListener('mouseover', function () {
            // console.log(this.innerText);
            newSpan.classList.add('tooltipText');
            newSpan.innerText = 'text tooltipa';
            this.appendChild(newSpan);

        });

        tip.addEventListener('mouseout', function () {
            // console.log('out');
            newSpan.parentElement.removeChild(newSpan);

        });
    })


});

/*
 <span class="tooltipText">Text tooltipa</span>
 */
