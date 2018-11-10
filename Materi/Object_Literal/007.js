/**
 * MDN web docs
 * Working with objects
 * Creating new objects
 * Using a constructor function 
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

// ===> Indexing object properties
// Car.prototype.color = null;
// car1.color = 'black'

// ===> Defining methods
// objectName.methodname = functionName;
// var myObj = {
//     myMethod: function (params) {
//         // ..do something
//     }
// }

// function displayCar() {
//     var result = 'A Beautiful ' + this.year + ' ' + this.make + ' ' + this.model;
//     pretty_print(result)
// }
// this.displayCar = displayCar;

// function Car(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
//     this.displayCar = displayCar;
// }

// car1.displayCar();