function tukarBesarKecil(kalimat) {
    var kamus = 'qwertyuiopasdfghjklzxcvbnm'
    var kamus2 = kamus.toUpperCase()
    var output = ''

    for (var i = 0; i < kalimat.length; i++) {
        var kecil = false
        var besar = false

        for (var j = 0; j < kamus.length; j++) {

            if (kalimat[i] == kamus[j]) {
                kecil = true
                output += kalimat[i].toUpperCase()
            } else if (kalimat[i] == kamus2[j]) {
                besar = true
                output += kalimat[i].toLowerCase()
            }
        }

        if (kecil == false && besar == false) {
            output += kalimat[i]
        }
    }
    return output
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"