function totalDigitRekursif(angka, n = String(angka).length - 1) {
    // you can only write your code here!
    if (n === 0) {
        return Number(String(angka)[0])
    } else {
        return Number(String(angka)[n]) + totalDigitRekursif(angka, n - 1)
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5