var StudentMorning = ['andi', 'budi', 'cindi', 'dani']
var StudentEvening = ['andi', 'budi', 'cindi', 'dani', 'eko', 'fani'];

var dataTerpanjang = 0;
if(StudentEvening.length > StudentMorning.length) {
    dataTerpanjang = StudentEvening.length;
} else {
    dataTerpanjang = StudentMorning.length;
}

var objStudents = {};
for (var i = 0; i < dataTerpanjang; i++) {
    if (StudentEvening[i] != undefined) {
        objStudents[StudentEvening[i]] = 2;
    }
    if (StudentMorning[i] != undefined) {
        objStudents[StudentMorning[i]] = 2;
    }
}
console.log(Object.keys(objStudents));