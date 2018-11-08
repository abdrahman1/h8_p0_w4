var studentMorning = ['andi', 'budi', 'cindi', 'dani']
var studentEvening = ['andi', 'budi', 'cindi', 'dani', 'eko', 'fani']
function gabungStudent(arr1, arr2) {
    var gabung = studentMorning;
    for (var i = 0; i < studentEvening.length; i++) {
        gabung.push(studentEvening[i]);
    }
    var hasil = [];
    for (var i = 0; i < gabung.length; i++) {
        var isDuplikat = false;
        for (var j = 0; j < hasil.length; j++) {
            if (gabung[i] === hasil[j]) {
                isDuplikat = true;
                break;
            }
        
        }
        if (isDuplikat === false) {
            hasil.push(gabung[i]);
        }
    }

}
console.log(gabungStudent(studentMorning. studentEvening))