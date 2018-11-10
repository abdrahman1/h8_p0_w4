/**
 * H8_P0_W4_E8
 * Tukar Besar Kecil
 */

function tukarBesarKecil(kalimat) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var kamusUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var hasil = '';
    for (var i = 0; i < kalimat.length; i++) {
        var isUpper = false;
        var isLower = false;
        for (var j = 0; j < kamus.length; j++) {
            if (kalimat[i] === kamus[j]) {
                isLower = true;
                hasil += kamusUppercase[j]
            } else if (kalimat[i] === kamusUppercase[j]) {
                isUpper = true;
                hasil += kamus[j];
            }
        }
        if (isUpper == false && isLower == false) {
            hasil += kalimat[i]
        }
   
    }
    return hasil;
}

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

// var kamus = 'abcdefghijklmnopqrstuvwxyz';
// var kamusUppercase = kamus.toUpperCase();
// console.log(kamusUppercase[0]);