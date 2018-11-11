/**
 * H8_P0_W4_E14
 */

function changeVocals(str) {
    var vocal = 'aeiouAEIOU'
    var nextVocal = 'bfjpvBFJPV'
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        var isVocal = false;
        var index = 0
        for (var j = 0; j < vocal.length; j++) {
            if (str[i] === vocal[j]) {
                isVocal = true;
                index = j;
            }
        }
        if (isVocal == true) {
            newStr += nextVocal[index];    
        } else {
            newStr += str[i]
        }
    }
    return newStr;
}

function reverseWord(str) {
    //code di sini
    var newStr = '';
    for (var i = str.length-1; i >=0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function setLowerUpperCase(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr; 
}

function removeSpaces(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            newStr += str[i];
        }
    }
    return newStr;
}

function passwordGenerator(name) {
    //code di sini
    var ubahVocal = changeVocals(name);
    var balikanKata = reverseWord(ubahVocal);
    var aturHurufBesarKecil = setLowerUpperCase(balikanKata);
    var hapusSpasi = removeSpaces(aturHurufBesarKecil);
    var hasil =  hapusSpasi;

    if (name.length < 6) {
        return 'Minimal Karakter yang diinputkan adalah 5 karakter';
    } else {
        return hasil;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'