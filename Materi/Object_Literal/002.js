var person = {
    firstName: "john",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName())

// var x = 'this This'
// var thisThis = myFunction();
// function myFunction() {
//     return this;
// }
// console.log(myFunction())

// In this example this refers to person2, even if it is a method of person1:
var person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName: "John",
    lastName: "Doe",
}
var x = person1.fullName.call(person2);
console.log(x);