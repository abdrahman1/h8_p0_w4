/**
 * 
 *
 *  
 */

function fpb(angka1, angka2) {
    var faktor1 = [];
    var faktor2 = [];
    var faktorSama = [];
    var length;
    if (angka1 > angka2) {
        length = angka1;
    } else {
        length = angka2;
    }
    for (var i = 0; i <= length; i++) {
        for (var j = 0; j <= angka1; j++) { // cari faktor`1
            if (angka1 % j == 0) {
                faktor1[j] = j;
            } else {
                faktor1.slice(j, 1)
            }
        }
        for (var k = 0; k <= angka2; k++) { // cari faktor 2
            if (angka2 % k == 0) {
                faktor2[k] = k;
            }
        }
        if (faktor1[i] === faktor2[i]) { // cari faktor sama
            faktorSama[i] = faktor1[i];
        }
        var faktorTerbesar = faktorSama[0];
        for (var l = 0; l < faktorSama.length; l++) { // cari terbesar
            if (faktorSama[l] > faktorTerbesar) {
                faktorTerbesar = faktorSama[l];
            }
        }
    }
    return faktorSama.length;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1