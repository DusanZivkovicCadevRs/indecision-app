// setup constructor to take name and age = 0
// getDescription - Dusan Z is 30 year(s) old

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// student ext person + major

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }

    hasMajor() {
        return !!this.major;
    }
}

// Traveler - Person
// Support for homeLocation
// Override getGreeting
// 1. Hi. Im ???. I'm visiting from Philadelphia.
// 2. Hi Im ???.

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}`
        }

        return greeting;
    }
}

const me = new Person('Dusan Zivkovic', 30);
console.log(me.getGreeting());
console.log(me.getDescription());

const se = new Person();
console.log(se.getGreeting());
console.log(se.getDescription());

const studentMe = new Student('Dusan Zivkovic', 30, 'Computer Engineering');
console.log(studentMe)
console.log(studentMe.getDescription());
console.log(studentMe.hasMajor());

const studentSe = new Student();
console.log(studentSe);
console.log(studentSe.getDescription());
console.log(studentSe.hasMajor());

const travelerMe = new Traveler('Dusan Zivkovic', 30, 'Cacak');
console.log(travelerMe)
console.log(travelerMe.getGreeting());

const travelerSe = new Traveler();
console.log(travelerSe)
console.log(travelerSe.getGreeting());
