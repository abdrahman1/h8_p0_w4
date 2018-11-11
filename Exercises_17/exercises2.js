function kaliTerusRekursif(angka) {
    var angkaBaru = kaliSemuaDigit(angka)
    if (angka < 10) {
        return angka;
    } else {
        return kaliTerusRekursif(angkaBaru);
    }
}
function kaliSemuaDigit(angka, n=String(angka).length-1) {
    if (n === 0) {
        return Number(String(angka)[0]);
    } else {
        return Number(String(angka)[n] * kaliSemuaDigit(angka, n-1))
    }
}


// // TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6



// function KaliSemuaDigit(angka, n = String(angka).length - 1) {
//     if (n === 0) {
//         return Number(String(angka)[0])
//     } else {
//         return Number(String(angka)[n]) * KaliSemuaDigit(angka, n - 1)
//     }
// }

// function kaliTerusRekursif(angka) {
//     angka = KaliSemuaDigit(angka)

//     if (angka < 10) {
//         return angka
//     } else {
//         return kaliTerusRekursif(angka)
//     }

// }

// // TEST CASES
// console.log(kaliTerusRekursif(66)); // 8
// console.log(kaliTerusRekursif(3)); // 3
// console.log(kaliTerusRekursif(24)); // 8
// console.log(kaliTerusRekursif(654)); // 0
// console.log(kaliTerusRekursif(1231)); // 6

