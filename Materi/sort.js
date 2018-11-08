function sort(array) {
    var cek = true; // bikin variable cek bernilai true
    while (cek) { // looping hingga cek bernilai false
        cek = false; // cek disimpan dengan nilai false agar looping pertama dapat berhenti
        for (i = 0; i < array.length - 1; i++) { // looping kedua 
            sortSementara = array[i]; // simpan variable sortSementara u/ mengcopy nilai array kiri 
            if (array[i] > array[i + 1]) { // dibanding array kiri lebih besar dari array kanan
                cek = true; // cek disimpan dengan nilai true, looping pertama akan berjalan lagi 
                array[i] = array[i + 1]; // set array kiri dengan nilai array kanan
                array[i + 1] = sortSementara; // Set array kanan dengan nilai sortSementara
                console.log('==>', array)
            }
        }
    }
    return array
}


var numbers = [6, 4, 7, 10, 3, 1, 9];
var array = sort(numbers);
console.log(array);