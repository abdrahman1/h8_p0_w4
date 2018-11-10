// function showProps(obj, objName) {
//   var result = '';
//   for (var i in obj) {
//     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//     if (obj.hasOwnProperty(i)) {
//       result += objName + '.' + i + ' = ' + obj[i] + '\n';
//     }
//   }
//   return result;
// }

// console.log(i);



//review object literal

// var obj = {
//     nama : 'hacktiv8',
//     fox : 'zen fox',
//     tahun : 2018,
//     batch : 26,
//     phase1 : '26 november 2018'
// }
// for(var i in obj){
//     console.log(obj[i])
// }

// console.log(i);


//lagi

var result =[];

var person = {};
person.nama = 'theresia';
person.age = 25;
person.gender = 'female'
hobby = 'belajar, baca, tidur'

// result.push(person);
// console.log(result);

person = {}
person.nama = 'mantan';
person.age = 29;
person.gender = 'male';

// result.push(person);
// console.log(result);

var hasil = ''
for(var i = 0; i < result.length; i++){
 console.log('nama : 'result[i].nama)
 console.log('umur : 'result[i].age)
 console.log('JK : 'result[i].gender)
 if(result[i].hobby === undefined){
    console.log('hobby : ');
    console.log()

 }

}

console.log(hasil)

//output :
// nama : theresia
// umur : 25
// JK : female
// hobby :
// -belajar
// -Baca
// -tidur

// nama : mantan
// umur : 29
// JK : male



// var hasil =0
// for ( var i = 0; i < result.length; i++){
//     hasil = hasil + result[i]['age']
    
// }
// console.log(hasil)



// 3 cara buat 
// 1. namaVariabelObject = {}
//     namaVariableObject.keyname = data/value

// 2. namaVariabelObject = {}
//     namaVariableObject['keysname'] =data/value

// 3. namaVariabelObject = {}
//     keyname = data/value

//cara akses objek
// - pake.keyname
// - pake ['keyname']

//beda cara 1 dan 2
// - jika keyname memiliki spasi
// - jika keyname datanya ada didalam variabel
