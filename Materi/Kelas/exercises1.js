function hapusDouble(array) {
    var hasilDouble = [];
    for (var i = 0; i < array.length; i++) {
        var isDouble = false;
        for (var j = 0; j < hasilDouble.length; j++) {
            if (array[i] === hasilDouble[j]) {
                isDouble = true;
                break;
            }
        }
        if (isDouble === false) {
            hasilDouble.push(array[i])
        }
    }
    return hasilDouble;

} 
console.log(hapusDouble(['joni', 'budi', 'ana', 'joni']));


function gabungStudent(student1, student2) {
    var gabung = student1;
    
    for (var i = 0; i < student1.length; i++) {
        gabung.push(student2[i]);
    }
    return student1;
}

console.log(gabungStudent(['andi', 'badu', 'cindi', 'dani'], ['andi', 'badu', 'cindi', 'dani', 'Eko', 'Fani']));