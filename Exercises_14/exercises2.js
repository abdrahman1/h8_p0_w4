function changeVocals(str) {
    let lowVocal = 'aiueoa'
    let lowVocalNext = 'bjvfpb'
    let upperVocal = lowVocal.toUpperCase()
    let upperVocalNext = lowVocalNext.toUpperCase()
    let result = ''

    for (let i = 0; i < str.length; i++) {
        var check = false

        for (var j = 0; j < lowVocal.length - 1; j++) {
            if (str[i] == lowVocal[j]) {
                result += lowVocalNext[j]
                check = true
            } else if (str[i] == upperVocal[j]) {
                result += upperVocalNext[i]
                check = true
            }
        }
        if (check == false) {
            result += str[i]
        }
    }

    return result

}

function reverseWord(str) {
    str = changeVocals(str)
    let result = ''

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }

    return result
}

function setLowerUpperCase(str) {
    str = reverseWord(str)
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'
    let Uppercase = lowercase.toUpperCase()
    let result = ''

    for (let i = 0; i < str.length; i++) {
        let check = false

        for (let j = 0; j < lowercase.length; j++) {
            if (str[i] == lowercase[j]) {
                result += str[i].toUpperCase()
                check = true
            } else if (str[i] == Uppercase[j]) {
                result += str[i].toLowerCase()
                check = true
            }
        }

        if (check == false) {
            result += str[i]
        }
    }

    return result
}



function removeSpaces(str) {
    str = setLowerUpperCase(str)
    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i]
        }
    }

    return result
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return removeSpaces(name)
    }
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'