function oddEvenMulti(numbers) {
    var kali = 1;
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers[i].length; j++) {
            kali *= numbers[i][j];
        }
    }
    if (kali % 2 === 0) {
        return 'genap';
    } else {
        return 'ganji';
    }
}
console.log(oddEvenMulti([[1,2,3],[4,2],[1,2,3]]));