// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    // if arguments are needed, use es5
    console.log(arguments);
    return a + b;
}

const addArrow = (a, b) => {
    // console.log(arguments); // this will throw an arguments not defined error!!!
    return a + b;
}

console.log(add(3, 5));

// this keyword - no longer bound
// arrow function does not override "this"

const user = {
    name: 'Dule',
    cities: ['Novi Sad', 'Beograd', 'Cacak'],
    // ovde hocu da pristupim this 
    // printPlacesLived: function() {
    // ovo je isto
    // printPlacesLived() {
    //     const cityMessages = this.cities.map((city) => {
    //         return this.name + ' has lived in ' + city;
    //     })
    //     console.log(cityMessages);

    //     console.log(this.name);
    //     console.log(this.cities);

    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city);
    //     })
    // }
    printPlacesLived() {
        return this.cities.map(city => this.name + ' has lived in ' + city + '.');
    }
}

console.log(user.printPlacesLived());

// challenge area

const multiplier = {
    // numbers - array of numbers
    // multiply by - single number
    // multply - return a nwa array where the number have been multiplied
    numbers: [1, 2, 3],
    multplyBy: 2,
    multiply() {
        return this.numbers.map(number => number * this.multplyBy);
    }
}

console.log(multiplier.multiply());