$(()=> {

//task1

let getNumbers = (arr) => {
    return arr.map( el => el*2);
    };

    console.log(getNumbers([2,3,4,5]));

    //albo

    // let array = [2,4,6,8];
    // let getNumbers = (el) => el*2;
    //
    // console.log(array.map(getNumbers));

//task2

    function Weather(temp){
        this.temp = temp;
        this.avgTemp;
    }

    let avgFn = (prev, curr, i, array) => (prev + curr)/array.length;

    Weather.prototype.getAvgTemperature = function () {
        // console.log('avg');
        this.avgTemp = this.temp.reduce(avgFn).toFixed(2);

    };

    var day1 = new Weather([-2, 4.4, 3]);
    // console.log(day1);
    day1.getAvgTemperature();
    console.log(day1.avgTemp);

    var span = $('<span>').text(day1.avgTemp);
    $('.avg').append(span);

//task3

let btn = $('button');

btn.on('click', (e) =>  {
    // console.log($(this));
    // console.log(e.target);
    // e.target.nextElementSibling.style.display = 'block'; albo
    $(e.target).next().toggle();

})


});