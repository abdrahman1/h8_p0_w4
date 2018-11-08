/**
 * H8_P0_W4_E2
 * Faktor Persekutuan Terbesar.js
 *  
 */

function fpb(angka1, angka2) {
    var fpb = 1;
    for (var i = 1; i <= angka1; i++) {
        if (angka2 % i === 0 && angka1 % i === 0) {
            fpb = i;
            console.log('===>'+angka2%i+'= '+i);
        }
    }
    return fpb;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1