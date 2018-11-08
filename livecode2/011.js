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
    var cetak = '';
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] % !== 0 && sentence[i] !== ' ') {
            cetak +=
            console.log('===>'+ i +': '+)
        }
    }
}

/**
   *     ALGORITMA
   * ----
   *    1. Masukkan var cetak.
        2. Buat looping untuk mengecek indeks.
        3. Buat confition apabila sentence modulus 1 tidak sama dengan 0 cetak
        4. return cetak.
   * 
   */