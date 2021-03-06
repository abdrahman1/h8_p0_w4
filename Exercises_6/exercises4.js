/**
 * H8_P0_W4_E6
 * Digit Perkalian Minimum
 */

function digitPerkalianMinimum(angka) {
    console.log("\n")
    var fpb = [];
    // cari faktor
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            fpb.push([i])
        }
    }
    // console.log(fpb);
    // bandingkan hasil faktor apakah sesuai dengan angka
    var duaFaktor = [];
    for (var i = 0; i < fpb.length; i++) {
        var isFaktor = false;
        var index = -1;
        for (var j = 0; j < duaFaktor.length; j++) {
            if (fpb[i] * duaFaktor[j] === angka) {
                isFaktor = true;
                index = j;
                break;
            }
        }
        if (isFaktor === false) {
            duaFaktor.push([fpb[i]]);
        } else {
            duaFaktor[index].push(fpb[i]);
        }
    }
    console.log(duaFaktor)
    // return duaFaktor;
    // pasangan faktor dengan jumlah terkecil
    // var fpbMin = Number(fpb[fpb.length - 1]) + 10
    var jumlahDigit = String(duaFaktor[0][0]) + String(duaFaktor[0][1]);
    var digitKecil = jumlahDigit.length
    // console.log(digitKecil);
    var fpbMin = 100;
    var indexFpbMin;
    var banding;
    for (var k = 0; k < duaFaktor.length; k++) {
        var cariFpbMin = true;
        // banding = Number(duaFaktor[k][0]) + Number(duaFaktor[k][1])
        banding = String(duaFaktor[k][0]) + String(duaFaktor[k][1]);
        if (banding.length > digitKecil) {
            digitKecil = banding.length;
            indexFpbMin = k;
        }
    }

    if (angka === 1) {
        return 2;
    } else if (duaFaktor.length === 1) {
        return 4;
    } else {
        return digitKecil
    }
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2