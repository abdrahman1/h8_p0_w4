/**
Graduates Count

Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.

Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong

Aturan coding:
  - WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
  - Dilarang menggunakan built-in function:
    - .map()
    - .filter()
    - .reduce()
*/

function graduatesCount(scores) {
  var nilaiLulus = 0;
  var hasil;
  if (scores.length === 0) {
      return 'Data Kosong'
  } else {
      for (var i = 0; i < scores.length; i++) {
          if (scores[i] >= 75) {
              nilaiLulus++;
          }
      }
      if (nilaiLulus === scores.length) {
          hasil = 'semua orang lulus'
      } else if (nilaiLulus === 0) {
          hasil = 'tidak ada yang lulus'
      } else {
          hasil = nilaiLulus + ' orang lulus'
      }
      
  }
  return hasil;
}
// }


// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong

/**
* PSEUDOCODE
* ---------
* STORE 'nilaiLulus' with 0;
* STORE 'hasil'
* FOR (STORE 'i' with 0 THEN 'i' < length of 'score' THEN set increment 'i' with 1 )
*  IF (index i of 'score' more or equal then 75)
*    set increment 'nilaiLulus' with 1
* IF (nilailulus equal length of score)
*    set hasil with 'semua orang kylus'
* ELSE IF (nilaiLulus  equal 0) 
*    SET hasil with 'tidaka ada lulus'
* ElSE 
*    SET hsail with nilalulus with  'orangn lulus'
* RETURN hasil;
*/