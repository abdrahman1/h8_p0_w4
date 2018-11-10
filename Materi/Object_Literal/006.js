/**
 * MDN web docs
 * Working with objects
 */


// ===> Using the Object.create method
// Animal properties and method encapsulation
var Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function () { // Method which wil display type of animal
        console.log(this.type);
    }
};
// Create new animal type called animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output: Invertebrates
// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType();

// ===> Using prototype in JavaScript
function doSomething(){}
console.log( doSomething.prototype);
// It does not matter how you declare the function, a function in JavaScript will
// always have a default prototype property.
var doSomething = function(){};
console.log( doSomething.prototype );

function doSomething(){}
doSomething.prototype.foo = 'bar';
console.log(doSomething.prototype);

function doSomething() {}
doSomething.prototype.foo = 'bar';
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = 'some value';
console.log('doSomeInstancing.prop:     ' + doSomeInstancing.prop);
console.log('doSomeInstancing.foo:      ' + doSomeInstancing.foo);
console.log('doSomething.prop:          ' + doSomething.prop);
console.log('doSomething.foo:           ' + doSomething.foo);
console.log('doSomething.prototype.prop:' + doSomething.prototype.prop);
console.log('doSomething.prototype.foo: ' + doSomething.prototype.foo);
