function digitPerkalianMinimum(angka) {
    // var hasil = 0
    var digitHasil = 2 * angka
    var faktor = ''
    for (var i = 0; i < angka + 1; i++) {
        if (angka % i === 0) {
            // console.log('=>'+angka+'%'+i)
            var pasanganI = angka / i
            // console.log('==>pasanganI: '+pasanganI)
            faktor = pasanganI + String(i)
        }
        // console.log('====>faktor: '+faktor)
        if (digitHasil > faktor.length && faktor !== '') {
            // hasil = faktor.length
            digitHasil = faktor.length
        }
        // console.log(digitHasil)
    }
    return digitHasil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2c