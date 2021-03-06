function sorting(arrNumber) {

    for (let i = arrNumber.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arrNumber[j] > arrNumber[j + 1]) {
                [arrNumber[j], arrNumber[j + 1]] = [arrNumber[j + 1], arrNumber[j]]
            }
        }
    }

    return arrNumber

}

function getTotal(arrNumber) {
    let counter = 1

    for (let i = 0; i < arrNumber.length - 1; i++) {
        if (arrNumber[i] == arrNumber[arrNumber.length - 1]) {
            counter++
        }
    }

    if (arrNumber[arrNumber.length - 1] === undefined) {
        return ''
    } else {
        return 'angka paling besar adalah ' + arrNumber[arrNumber.length - 1] + ' dan jumlah kemunculan sebanyak ' + counter + ' kali'
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''