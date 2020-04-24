// task1

let write = () => console.log('hello world');
write();

//task2

let multiply = (num=6) => {return num * 2};

console.log(multiply());

//task3

let biggerNum = (num1, num2) => {
  if (num1>num2) {
      return num1;
  }
  else return num2;
};

console.log(biggerNum(87,25));


//task4

let getSecondMaxNumber = (array) => {

    array.sort((a,b)=> b-a );

    return array[1];

    //wersja pełna:
//     function fn(a, b) {
//         return a-b;
//     }
//
//     arr.sort(fn);

};

var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));


//task5

console.log((param => param)(6));
console.log(((x) => { return x })(3));


// task6


let foo = (j=4) => {
    let counter = 0;
    let intervalID= setInterval(() =>{
        if (counter <=j) {
            console.log('hello' + counter++);
        }
        else {
            clearInterval(intervalID);
        }
    }, 2000);
};

foo(3);

