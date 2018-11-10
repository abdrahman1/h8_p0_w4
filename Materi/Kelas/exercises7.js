var obj = {
    nama: 'hacktiv8',
    fox: 'zen fox',
    tahun: 2018,
    batch: 26,
    phase1: '26 november 2018'
}
for (var i in obj) {
    console.log(obj[i])
}
console.log(i);
console.log('\n');

var result = [];
var person = {};
person.nama = 'theresia';
person.age = 25;
person.gender = 'female';
hobby = 'belajar, baca, tidur';

console.log(person)
result.push(person);
console.log(result)
console.log(result[0].nama);

person = {}
person.nama = 'mantan';
person.age = 29;
person.gender = 'male';

result.push(person);
console.log(result)
console.log(result[1].gender);
console.log('\n');

var hasil = ''
for (var i = 0; i < result.length; i++) {
    console.log('nama : ' + result[i].nama)
    console.log('umur : ' + result[i].age)
    console.log('JK   : ' + result[i].gender)
    if (result[i].hobby !== undefined) {
        console.log('hobby : ' + result[i].hobby);
        console.log();
    }
}
console.log(hasil);


function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if (obj.hasOwnProperty(i)) {
            result += objName + '.' + i + ' = ' + obj[i] + '\n';
        }
    }
    return result;
}

console.log(result, 'orang'); console.log('\n')

var obj = {
    nama: 'Hacktiv8',
    fox: 'Zen Fox',
    tahun: 2018,
    batch: 26,
    phase1: '26 November 2018'
}

for (var i in obj) {
    // console.log(i)
    console.log(obj[i])
}
console.log('\n')

console.log(obj.hasOwnProperty('tes'))
console.log(obj.hasOwnProperty('batch'))


console.log(obj["fox"])