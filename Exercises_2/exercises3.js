/**
 * H8_P0_W4_E2
 * Faktor Persekutuan Terbesar.js
 *  
 */

function fpb(angka1, angka2) {

    var faktor1 = []
    var faktor2 = []
    var faktorArr = []
    // cari faktor dari angka
    for (var i = 1; i <= angka1; i++) {
        if (angka1 % i == 0) {
            faktor1.push(i);
        }
    }
    for (var i = 1; i <= angka2; i++) {

        if (angka2 % i == 0) {
            faktor2.push(i);
        }
    }
    // memasukan faktor array dari angka1 dan angka2 ke faktorArr
    faktorArr.push(faktor1, faktor2)
    // console.log(faktorArr)
    var faktorBesar;
    var faktorKecil;
    // untuk mengetahui faktor array mana lebih panjang
    if (faktor1.length > faktor2.length) {
        faktorBesar = faktor1
        faktorKecil = faktor2
    } else {
        faktorBesar = faktor2
        faktorKecil = faktor1
    }
    // console.log(faktorBesar)
    // untuk mengetahui nilai faktor terbesar dari faktor array
    var groupFaktor = []
    for (var i = 0; i < faktorBesar.length; i++) {
        var isSame = true;
        for (var j = 0; j < faktorKecil.length; j++) {
            if (faktorBesar[i] == faktorKecil[j]) {
                isSame = true;
                index = j
            }
        }
        if (isSame === true) {
            groupFaktor.push(faktorKecil[index])
        }
    }
    // console.log(groupFaktor)
    return groupFaktor[groupFaktor.length - 1]

}
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1