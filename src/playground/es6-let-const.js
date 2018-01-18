// reassign
var nameVar = 'Dule';
var nameVar = 'asdf';
console.log('nameVar', nameVar);

let nameLet = 'Dule';
nameLet = 'Duchara';
console.log('nameLet', nameLet);

const nameConst = 'Dule';
// nameConst = 'Dule';
console.log('nameConst', nameConst);

function getpetname() {
    var petname = 'hal';
    return petname;
}

const petname = getpetname();
console.log(petname);

// block scoping
// !!!!! VAR IS FUNCTION SCOPED
// IF IS NOT FN ITS A STATEMENT!!!
// LET/CONST ARE BLOCK SCOPED
var fullName = 'Dule Z';
if(fullName) {
    // var firstName = fullName.split(' ')[0];
    // let firstName = fullName.split(' ')[0];
    const firstName = fullName.split(' ')[0];
    console.log(firstName)
}

// general tip is to start all variables as const
// if one is reasigned then change it to let.

console.log(firstName);