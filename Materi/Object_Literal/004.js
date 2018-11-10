/**
 * Creating new object
 * Objecta Initializer
 */

// ==> Object initializer

var object1 = {
    a: 'foo',
    b: 42,
    c: {}
}
console.log(object1.a);
// expected output: "foo"

var a = 'foo';
var b = 42;
var c = {};
var object2 = {
    a: a,
    b: b,
    c: c
};

console.log(object2.b);
// expected output: 42

// ====> Syntax
var o = {};
var o = {
    a: 'foo',
    b: 42,
    c: {}
};
var a = 'foo',
    b = 42,
    c = {};
var o = {
    a: a,
    b: b,
    c: c
};

// var o = {
//     property: function (parameters) {
//         get property() {},
//         set property(value) {}
//     }
// }
// console.log(o);

// ===> New notations in ECMAScript 2015
// Shorthand property names (ES2015)
var a = 'foo',
    b = 42,
    c = {};
var o = {
    a,
    b,
    c
};
// Shorthand method names (ES2015)
var o = {
    property(parameters) {}
};

// Computed property name (ES2015)\
var prop = 'foo';
var o = {
    [prop]: 'hey',
    ['b' + 'ar']: 'there'
};
console.log(o);
//Creating objects
var object = {
    foo: 'bar',
    age: 42,
    baz: {
        myProp: 12
    }
}
console.log(object.foo); // "bar"
object['age']; // 42

object.foo = 'baz';
// shorter notation
var a = 'foo',
    b = 42,
    c = {};
// Shorthand property names (ES2015)
var o = {
    a,
    b,
    c
};
console.log((o.a === {
    a
}.a));


function haveES2015DuplicatePropertySemantics() {
    'use strict';
    try {
        ({
            prop: 1,
            prop: 2
        });

        // No error thrown, duplicate property names allowed in strict mode
        return true;
    } catch (e) {
        // Error thrown, duplicates prohibited in strict mode
        return false;
    }
}
console.log(haveES2015DuplicatePropertySemantics())

// ===> Computed property names
var i = 0;
var a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
};
console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log(config);

// ======> Spread properties
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
var clonedObj = { ...obj1};
console.log(clonedObj)
// Object { foo: 'bar', x: 42}
var mergedObj = { ...obj1, ...obj2 };
// Object { foo: 'baz', x: 42, y: 13 }
console.log(mergedObj);

// ======> Prototype mutation
// var obj1 = {};
// assert(Object.getPrototypeOf(obj1) === Object.prototype);

// var obj2 = {__proto__: null};
// assert(Object.getPrototypeOf(obj2) === null);

// var protoObj = {};
// var obj3 = {'__proto__': protoObj};
// assert(Object.getPrototypeOf(obj3) === protoObj);

// var obj4 = {__proto__: 'not an object or null'};
// assert(Object.getPrototypeOf(obj4) === Object.prototype);
// assert(!obj4.hasOwnProperty('__proto__'));

// var __proto__ = 'variable';

// var obj1 = {__proto__};
// assert(Object.getPrototypeOf(obj1) === Object.prototype);
// assert(obj1.hasOwnProperty('__proto__'));
// assert(obj1.__proto__ === 'variable');

// var obj2 = {__proto__() { return 'hello'; }};
// assert(obj2.__proto__() === 'hello');

// var obj3 = {['__prot' + 'o__']: 17};
// assert(obj3.__proto__ === 17);