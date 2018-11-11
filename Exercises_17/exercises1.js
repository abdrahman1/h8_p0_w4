/**
 * H8_P0_W4_E17
 */
function kaliTerusRekursif(angka) {
    var angkaStr = String(angka);
    var hasilKali = 1
    if (angkaStr.length === 0) {
        return 1;
    }
    for (var i = 0; i < angkaStr.length; i++) {
        hasilKali = hasilKali * Number(angkaStr[i])
    }
    if (String(hasilKali).length > 1) {
        return kaliTerusRekursif(hasilKali);
    } else {
        return hasilKali;
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
// ```
