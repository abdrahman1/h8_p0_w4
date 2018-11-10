function checkAB(num) {
    var indexA = [];
    var indexB = [];
    var isJarakLebihTiga = false;
    for (var i = 0; i < num.length; i++) {
        if (num[i] == 'a') {
            indexA.push(i)
        } else if (num[i] == 'b') {
            indexB.push(i)
        }
    }
    for (var j = 0; j < indexA.length; j++) {
        for (var k = 0; k < indexB.length; k++) {
            selisih = Math.abs(indexB[k] - indexA[j])
            if (selisih === 4) {
                isJarakLebihTiga = true;
            }
            // console.log(indexB[k] + ' - ' +indexA[j] + ' = ' + selisih)

        }
    }

    return isJarakLebihTiga;
}


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false