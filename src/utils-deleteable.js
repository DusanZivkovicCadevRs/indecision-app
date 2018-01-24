console.log('utils.js is running');

// const square = x => x * x;
// const add = (x, y) => x + y;

// export const square = x => x * x;
// export const add = (x, y) => x + y;

const square = x => x * x;
const add = (x, y) => x + y;

// const subtract = (a, b) => a - b;
// export default subtract;

export default (a, b) => a - b;


// zero or one can be used as default epxort
// export { square, add, subtract as default } // named exports
export { square, add } // named exports
// exports - default export - named exports