/**
 * Creating new objects
 * Using a constructor function 
 */

// ===> Using object initializers
// var obj = {
//     property_1: value_1, // property_# may be an identifier...
//     2: value_2, // or a number...
//     // ...,
//     'property n': value_n
// }; // or a string
var cond;
if (cond) var x = {greeting: 'hi there'};

var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};
console.log(myHonda)
console.log(myHonda.engine); console.log('\n')

// ===> Using a constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var mycar  = new Car('Eagle', 'Talon Tsi', 1993);
var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);

console.log(kenscar);

function Person (name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
console.log(rand); console.log('\n');

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand)
var car2 = new Car('Nissan', '300ZX', 1992, ken);
console.log(car1);
console.log(car2.owner.name)

