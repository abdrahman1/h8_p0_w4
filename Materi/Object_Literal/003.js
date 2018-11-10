// objectName.propertyName
// objectName['property Name']
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar.make)

var object = {};
object['1'] = 'value';
console.log(object[1]);

var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'nilai'
console.log(object[bar]); console.log('\n')

var myObj = new Object();
    str = 'myString',
    rand = Math.random(),
    obj = new Object();
myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';
myObj['the color']             = ['red', 'blue', {green: 'greenleaf', yellow: 'brownsand'}]

console.log(myObj);
console.log(myObj['the color'])
console.log(myObj['the color'][2].green); console.log('\n')

var propertyName = 'make';
myCar[propertyName] = 'Toyota';
propertyName = 'model';
myCar[propertyName] = 'MVP';
console.log(myCar); console.log('\n');

// use the bracket notation with for...in to iterate over all the enumerable properties of an object. To illustrate how this works, the following function displays the properties of the object when you pass the object and the object's name as arguments to the function:
function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if (obj.hasOwnProperty(i)) {
            result += objName + '.' + i +' = '+obj[i]+'\n';
        }
    }
    return result;
}
console.log(showProps(myObj, 'objekSaya'));
console.log(showProps(myCar, 'carSaya'))

// Enumerate the properties of an object
function listAllProperties(o) {
    var objectToInspect;
    var result = [];
    for (objectToInspect = 0; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));    
    }
}
console.log(listAllProperties());