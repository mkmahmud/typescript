

// Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

// Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.


class Person {
    private name: string;
    private age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    public getDetails(): string {
        return `Person Name is ${this.name} and age ${this.age}`
    }

}

const Person1 = new Person('MK', 20)

console.log(Person1.getDetails())

class Student extends Person {
    private grade: string;


    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }

    public getGrade(): string {
        return `${name} grade is ${this.grade}`
    }
}

const Student1 = new Student('mk', 20, 'A')
console.log(Student1)