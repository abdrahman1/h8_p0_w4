var hewan = ['kambing', 'sapi', 'kerbau', 'kambing']
// kambing, sapi, kerbau

var objHewan = {}
for (var i = 0; i < hewan.length; i++) {
    objHewan[hewan[i]] = 1;
}
console.log(Object.keys(objHewan)); console.log('\n')

var objKopi = {
    'origin': 'Indonesia',
    'bean': 'Mandeling',
    'coarse': 'Medium',
    'jenis bag'  : ['plastik', 'karton', 'kaleng'],
    'berat': '600gr',
    'produk info': {
        'roasted at': '14 Oktober 2018',
        'expired date': '28 Oktober 2018'
    } 
}
var keys = Object.keys(objKopi);
for (let i = 0; i < keys.length; i++) {
    if (Array.isArray(objKopi[keys[i]])) {
        objKopi[keys[i]] = objKopi[keys[i]].join(', ')
    } 
    console.log(keys[i]+' is '+objKopi[keys[i]]);
}
console.log('\n')



function Person(nama, age, gender, hobby) {
    this.nama = nama;
    this.age = age;
    this.gender = gender;
    this.hobby = hobby;
}
var person1 = new Person('Theresa', 25, 'Female', ['baca', 'mancing', 'tidur siang']);
var person2 = new Person('Mantan', 29, 'Male')
// console.log(person2);

var keys = Object.keys(person1);
var tmpHoby = '';
for (let i = 0; i < keys.length; i++) {
    if ([keys[i]] === 'hobby') {
        // person1[keys[i]] = person1[keys[i]];
        tmpHoby += '-'+person1[keys[i]];
        console.log(tmpHoby + '\n')
    }
    console.log(keys[i]+' is '+person1[keys[i]]);
}