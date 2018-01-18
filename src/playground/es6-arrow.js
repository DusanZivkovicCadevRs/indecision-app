const square = function(x) {
    return x * x;
};

function squrareF (x) {
    return x * x;
};

const squareA = (x) =>  x * x 

console.log(square(3));
console.log(squrareF(3));
console.log(squareA(3));

// challengde 
// get first name ('mike smith') to be mike
// create regular 
// create shorthand

const getFirstNameOne = name => name.split(' ')[0];

const getFirstNameTwo = (name) => {
    return name.split(' ')[0];
}

console.log(getFirstNameOne('Mike Smity'));
console.log(getFirstNameTwo('Mike Smity'));
