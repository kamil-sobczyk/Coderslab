/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {

    var btn = document.getElementById('remove');
    
    btn.addEventListener('click', function () {
        this.parentElement.removeChild(this);
    })

});