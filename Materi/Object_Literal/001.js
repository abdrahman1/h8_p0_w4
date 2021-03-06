// var myObj = {
//     myKey: 'myValue';
// }

var myObj = {
    myKey: 'myValue'
};

var supermanObj = {
    id: "1a2b3c",
    name: "Superman",
    age: 200,
    favorites: [
        "coding",
        "reading",
        {
            sports: ["parkour", "hill climbing"]
        }
    ],
    address: {
        street:"Planet Krypton",
        zipcode: 54213
    }
};

console.log(supermanObj.name); //"Superman"
console.log(supermanObj.age); // 200
console.log(supermanObj.favorites[0]); // coding
console.log(supermanObj.favorites[2].sports); // ["parkour", "hill climbing"] 
console.log(supermanObj.favorites[2].sports[0]); // "parkour"
console.log(supermanObj.address);
console.log(supermanObj.address.zipcode); //54213