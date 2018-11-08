function tampikanNilaiGenap(number) {
    var hasil = [];
    for(var i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            hasil.push(number[i])
        }
    }
    return hasil;

}

function tampilkanIndexGenap(number) {
    var hasil = [];
    for (var i = 0; i < number.length; i++) {
        if (i % 2 === 0) {
            hasil.push(number[i]) 
        }
    }
    return hasil;
}

console.log(tampikanNilaiGenap([1, 2, 4, 7, 8, 11]));
console.log(tampilkanIndexGenap([1, 2, 4, 7, 8, 11]));
