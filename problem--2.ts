
// Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,




interface Person {
    name: string;
    age: number
}


function greaterAge(persons: Person[]): Person[] {
    return persons.filter(person => person.age >= 18)
}

const persons: Person[] = [
    { name: 'MK', age: 10 },
    { name: 'MK', age: 87 },
    { name: 'MK', age: 18 },
    { name: 'MK', age: 19 },
];

console.log(greaterAge(persons))
