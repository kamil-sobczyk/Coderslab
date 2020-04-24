function joinArrays(x,y,z) {
    let result = [];

    let array = [...x, ...y, ...z];
    result = array.sort();

    return result;


}

var x = [2,3];
var y = [0,1];
var z = [4,5];

joinArrays(x,y,z);

