
function checkAB(num) {
    var indexA = []
    var indexB = []
    var selisihTiga = false


    for (var i = 0; i < num.length; i++) {
        if (num[i] == 'a') {
            indexA.push(i)
        }
        else if (num[i] == 'b') {
            indexB.push(i)
        }
    }

    for (var j = 0; j < indexB.length; j++) {
        for (var k = 0; k < indexA.length; k++) {
            if (Math.abs(indexB[j] - indexA[k]) == 4) {
                selisihTiga = true
            }
        }
    }

    return selisihTiga

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false