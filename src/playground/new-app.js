import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Mika';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return 'Hi. My name is ' + this.name;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting());
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// class properties syntax, that another thing in .babelrc
//  "plugins": [ "transform-class-properties" ]

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi. My name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
const newGreeting = newSyntax.getGreeting;
console.log(newGreeting());