/**
 * H8_P0_W4_E4
 * Mencari Modus
 */

function cariModus(arr) { 
    tempModus = []
    modusArr = [];
    for (var i = 0; i < arr.length; i++) {
        var index = -1;
        for (var j = 0; j < tempModus.length; j++) {
            if (arr[i] == tempModus[j]) {
                index = j;
            }
        }
        if (index == -1) {
            tempModus.push(arr[i])
            modusArr.push([arr[i]]);
        } else {
            modusArr[index].push(arr[i])
        }
    }
    var nilaiModus = 0;
    for (var i = 0; i < modusArr.length; i++) {
         if (modusArr[i].length > nilaiModus) {
            nilaiModus = modusArr[i].length;
            indexModus = i
        }
    }
    if (nilaiModus === arr.length) {
        return -1
    } else if (nilaiModus == 1) {
        return -1
    } else {
        return modusArr[indexModus][0];
    }
    // return tempModus;


}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1