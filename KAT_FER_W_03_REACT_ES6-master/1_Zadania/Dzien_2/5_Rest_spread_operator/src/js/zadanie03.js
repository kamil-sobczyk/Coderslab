let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];

let setFunnyName = (...args) => {
    people.push(...args);
};

setFunnyName({person:"ktos", profession:'lekarz'}, {person:'ktokolwiek', profession:'nefrolog'});

console.log(people);
