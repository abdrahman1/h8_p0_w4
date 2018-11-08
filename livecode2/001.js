/**
 Hapus Angka
 -------------------------
 Diberikan sebuah function hapusAngka dimana function tersebut menerima input parameter berupa string.
 function tersebut akan membuang seluruh karakter berupa angka yang terdapat pada kata tersebut

 contoh:

 input: 'hacktiv8'
 output: 'hacktiv'

 input: '17 Agustus 1945'
 output: 'Agustus'

 RULES:
  - WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
  - DILARANG MENGGUNAKAN method .split()
 */

function hapusAngka(sentence) {
  var tempSentence = '';
  var angka = '1234567890';
  for (var i = 0; i < sentence.length; i++) {
    var check = true;
    for (var j = 0; j < angka.length; j++) {
      if (sentence[i] === angka[j] || sentence[i] === ' ') {
        check = false;
      } 
    }
    if (check) {
      tempSentence += sentence[i]
    }
  }
  return tempSentence;
}

console.log(hapusAngka('hacktiv8')); //hacktiv t
console.log(hapusAngka('17 Agustus 1945')); //Agustus
console.log(hapusAngka('')); 

/**
 * ALGORITMA
 * 1. membuat FUNGSI 'hapusAngka' parameter 'sentence'
 * 2. membuat variabel 'tempKata' dengan nilai string kosong ' '
 * 3. membuat variabel'angka' dengan nilai '1234567890'
 * 4. membuat pengulangan  FOR dengan counter 'i' 0 dan kondisi 'i' < sentence.length dan lakukan penambahan sebesar 1 kepada 'i'. selama nilai masih kurang dari panjang dari 'sentence' maka jalankan, jika tidak loncat ke no. 10.
 * 5. membuat var 'check' dengan nilai boolean true
 * 6. membuat pengulangan FOR dengan counter j = 0 dan kondisi kurang dari panjang karakter 'angka' kemudain lakukan penambahan sebesar 1 ke 'j'. jika ya jalankan kode, jika tidak lompat ke no 9.
 * 7. membuat IF untuk kodisi index ke 'i' dari sentence sama dengan index ke 'j' dari 'angka' ATAU index ke 'i' dari sentence sama dengan ' ', maka jalan baris bawah jika tidak ke no. 8
 * 8. atur ulang nilai 'check' dengan nilai false
 * 9. membuat IF untuk kodisi selama 'check' masih tue maka jalankan baris dibawah 
 * 9. lakukan penambahan dengan index ke 'i' dari sentence untuk 'tempSentence' 
 * 10. melakukan return untuk 'tempSentence' untuk pengembalian nilai fungsi 'hapusAngka'
 */

