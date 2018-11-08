function cariDuplikat(array) {
    var hasil = [];
    var temp = '';
    for(var i = 0; i < array.length; i++) {
        var isDuplikat = false;
        var cari = array[i];
        var index = 0;
        for (var j = 0; j < temp.length; j++) {
            if (array[j] === cari) {
                isDuplikat = true;
            }
        }
        if (isDuplikat === false) {
            temp += cari;
            hasil.push(cari);
        }
    }
    return hasil;
}
console.log(cariDuplikat(['2', '2', '3', '4', '3', '5'])); 
console.log(cariDuplikat(['1','2','3','2','2','2','5']));