function changeVocals(str) {
    var kamus = 'aeiouAEIOU'
    var kamus2 = 'bfjpvBFJPV'
    var hasil = ''
    for (var i = 0; i < str.length; i++) {
        var isVokal = false
        var index = 0
        for (var j = 0; j < kamus.length; j++) {
            if (kamus[j] === str[i]) {
                isVokal = true
                index = j
            }
        }
        if (isVokal === true) {
            hasil += kamus2[index]
        } else {
            hasil += str[i]
        }
    }
    return hasil
}

function reverseWord(str) {
    var hasil = ''
    for (var i = 0; i < str.length; i++) {
        hasil += str[str.length - 1 - i]
    }
    return hasil
}

function setLowerUpperCase(str) {
    var hasil = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            hasil += str[i].toLowerCase()
        } else {
            hasil += str[i].toUpperCase()
        }
    }
    return hasil
}

function removeSpaces(str) {
    var hasil = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            hasil += ''
        } else {
            hasil += str[i]
        }
    }
    return hasil
}

function passwordGenerator(name) {
    var konversiAbjad = changeVocals(name)
    // return konversiAbjad
    var balikKata = reverseWord(konversiAbjad)
    // return balikKata
    var tukarUkuran = setLowerUpperCase(balikKata)
    // return tukarUkuran
    var hasil = removeSpaces(tukarUkuran)
    return hasil
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'