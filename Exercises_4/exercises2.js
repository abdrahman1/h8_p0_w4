function cariModus(arr) {
    var deret = 0
    var deret2 = 0
    var modus = 0

    for (var i = 0; i < arr.length; i++) {
        deret = 0
        console.log('=> ' + i)
        //jalankan counter setiap ada angka sama 
        for (var j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] == arr[j]) {
                deret++
            }
            console.log('====>'+j +'!==' + i +' ------- ' + arr[i] + ' == '+ arr[j])
            console.log(deret);
        }
        console.log('deret = ' + deret)
        //cari nilai counter terbesar
        if (deret2 < deret) {
            deret2 = deret
            modus = arr[i]
        }

        //masukkan syarat untuk -1
        else if (deret2 === 0 || deret2 == arr.length - 1) {
            modus = -1
        }

    }
    return 'modus = ' + modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([5, 10, 10, 6, 5, 6])); // 5