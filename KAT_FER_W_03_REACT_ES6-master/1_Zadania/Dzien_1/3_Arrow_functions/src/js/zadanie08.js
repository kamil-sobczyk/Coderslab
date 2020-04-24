// const dog = {
//     type: "Mammal",
//     name: "",
//     setName: (newName) => {
//         this.name = newName;
//     }
// };
//
// dog.setName("Reksio");
// console.log(dog.name);
//
// poprawione: w obiekcie nie może być arrow function

//     const dog = {
//         type: "Mammal",
//         name: "",
//         setName: function(newName) {
//             this.name = newName;
//         }
//     };
//
// dog.setName("Reksio");
// console.log(dog.name);

//albo: nie używać this

const dog = {
    type: "Mammal",
    name: "",
    setName: (newName) => {
        dog.name = newName;
    }
};

dog.setName("Reksio");
console.log(dog.name);


